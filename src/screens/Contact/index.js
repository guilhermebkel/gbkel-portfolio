import React, { useState } from "react"
import { Input, Form, Button, Result } from "antd"
import { useMachine } from "@xstate/react"

import WiredInfo from "../../components/WiredInfo"
import Screen from "../../components/Screen"

import api from "../../services/api"

import { contactFormMachine } from "./machines"

import { ContactForm } from "./styles"

const Contact = (props) => {
	const { getFieldDecorator, validateFields } = props.form

	const [current, send] = useMachine(contactFormMachine)
	const [initialValues, setInitialValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})

	const handleSubmitMail = (event) => {
		event.preventDefault()

		validateFields(async (error, contactData) => {
      if (!error) {
				send("SUBMIT")

        try {
					await api.post("/mail/inquery", contactData)
		
					send("SUCCESS")

					setInitialValues({
						name: '',
						email: '',
						subject: '',
						message: ''
					})
				} catch(error) {
					send("FAIL")

					setInitialValues(contactData)
				}
			}
    });		
	}

	return (
		<Screen color="primary">
			<WiredInfo 
				info="contact"
				position="top"
			/>
			
			<ContactForm layout="horizontal" onSubmit={handleSubmitMail}>
				{
					(current.matches("idle") || current.matches("submitting")) && (
						<>
							<Form.Item label="Name" colon={false}>
								{getFieldDecorator('name', {
									initialValue: initialValues.name,
									rules: [
										{
											required: true,
											message: 'Please type your name',
										},
									],
								})(<Input placeholder="Please type your name" />)}
							</Form.Item>
							<Form.Item label="E-mail" colon={false}>
								{getFieldDecorator('email', {
									initialValue: initialValues.email,
									rules: [
										{
											required: true,
											message: 'Please type your email',
										},
									],
								})(<Input placeholder="Please type your email" />)}
							</Form.Item>
							<Form.Item label="Subject" colon={false}>
								{getFieldDecorator('subject', {
									initialValue: initialValues.subject,
									rules: [
										{
											required: true,
											message: 'Please type the subject',
										},
									],
								})(<Input placeholder="Please type the subject" />)}
							</Form.Item>
							<Form.Item label="Message" colon={false}>
								{getFieldDecorator('message', {
									initialValue: initialValues.message,
									rules: [
										{
											required: true,
											message: 'Please type the message',
										},
									],
								})(<Input.TextArea placeholder="Please type the message" />)}
							</Form.Item>
							<Button 
								type="primary"
								htmlType="submit"
								loading={current.matches("submitting") ? true : false}
								block={true}
							>
								Send mail
							</Button>
					</>
				)}

				{
						current.matches("succeded") && (
						<Result
							status="success"
							title="Successfully sent the email!"
							subTitle="I'll be in touch with you in the next 24 hours."
							extra={[
								<Button type="primary" onClick={() => send("CLOSE")}>Send a new mail</Button>,
								<Button onClick={() => send("CLOSE")}>Close</Button>
							]}
						/>
				)}

				{
						current.matches("failed") && (
						<Result
							status="warning"
							title="Something went wrong"
							subTitle="It looks like my online service is down. Please wait some seconds and try again!"
							extra={[
								<Button type="primary" onClick={() => send("RETRY")}>Try Again</Button>,
							]}
						/>
				)}
			</ContactForm>
		</Screen>
	)
}

export default Form.create({ name: "Contact" })(Contact)