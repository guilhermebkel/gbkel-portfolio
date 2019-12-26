import React, { useState } from "react"
import { Input, Form, Button, Result } from "antd"

import WiredInfo from "../../components/WiredInfo"
import Screen from "../../components/Screen"

import api from "../../services/api"

import { ContactForm } from "./styles"

const Contact = (props) => {
	const { getFieldDecorator, validateFields } = props.form

	const [formStatus, setFormStatus] = useState("none")
	const [loading, setLoading] = useState(false)
	const [initialValues, setInitialValues] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})

	const handleSubmitEmail = (event) => {
		event.preventDefault()

		validateFields(async (error, contactData) => {
			setLoading(true)

      if (!error) {
        try {
					await api.post("/mail/inquery", contactData)
		
					setFormStatus("success")

					setInitialValues({
						name: '',
						email: '',
						subject: '',
						message: ''
					})
				} catch(error) {
					setFormStatus("error")
					setInitialValues(contactData)
				}
			}
			
			setLoading(false)
    });		
	}

	return (
		<Screen color="primary">
			<WiredInfo 
				info="contact"
				position="top"
			/>
			
			<ContactForm layout="horizontal" onSubmit={handleSubmitEmail}>
				{
					formStatus === "none" && (
						<>
							<Form.Item label="Name" >
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
							<Form.Item label="E-mail">
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
							<Form.Item label="Subject">
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
							<Form.Item label="Message">
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
							<Button type="primary" htmlType="submit" loading={loading} block={true}>
								Send email
							</Button>
					</>
				)}

				{
						formStatus === "success" && (
						<Result
							status="success"
							title="Successfully sent the email!"
							subTitle="I'll be in touch with you in the next 24 hours."
							extra={[
								<Button type="primary" onClick={() => setFormStatus("none")}>Send a new mail</Button>,
								<Button onClick={() => setFormStatus("none")}>Close</Button>
							]}
						/>
				)}

				{
						formStatus === "error" && (
						<Result
							status="warning"
							title="Something went wrong"
							subTitle="It looks like my online service is down. Please wait some seconds and try again!"
							extra={[
								<Button type="primary" onClick={() => setFormStatus("none")}>Try Again</Button>,
							]}
						/>
				)}
			</ContactForm>
			<WiredInfo 
				info=""
				position="bottom"
			/>
		</Screen>
	)
}

export default Form.create({ name: "Contact" })(Contact)