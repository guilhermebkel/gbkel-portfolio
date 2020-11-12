import React from 'react';
import sendMail from '../../services/email';
import Api from '../../services/api'

import './style.css';
import './responsive.css';

import Background from '../../resources/background/footer.jpg'
import Github from '../../resources/icon/github.png'
import Behance from '../../resources/icon/behance.png'
import Linkedin from '../../resources/icon/linkedin.png'
import Whatsapp from '../../resources/icon/whatsapp.png'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            content: '',
            to_email: 'guilhermebromonschenkel@gmail.com'
        }
        this.sendForm = this.sendForm.bind(this);
    }

    async componentDidMount(){
        const { data: response } = await Api.get('/email')
        
        if(response.result){
            this.setState({
                to_email: response.data.email
            })
        }
    }

    handleName = (event) => this.setState({name: event.target.value})
    handleEmail = (event) => this.setState({email: event.target.value})
    handleSubject = (event) => this.setState({subject: event.target.value})
    handleText = (event) => this.setState({content: event.target.value})

    async sendForm(){
        const data = {
            from_name: this.state.name,
            from_email: this.state.email,
            to_email: this.state.to_email,
            subject: this.state.subject,
            message: this.state.content
        }
        await sendMail(data)
        this.setState({
            name: '',
            email: '',
            subject: '',
            content: ''
        })
        alert('Message sent with sucess!');
    }

    render() {
        return (
            <div id="contact" className="contact" style={{ backgroundImage: `url(${Background})` }}>
                <div className="contact-container">
                    <h1 className="contact-container-title">Let's talk!</h1>
                    <form className="contact-form">
                        <div className="form-input">
                            <input value={this.state.name} onChange={this.handleName} 
                            placeholder="Name" required id="name" type="text" autofill="off" />
                            <input value={this.state.email} onChange={this.handleEmail} 
                            placeholder="Email" required id="email" type="text"></input>
                            <input value={this.state.subject} onChange={this.handleSubject} 
                            placeholder="Subject" required id="subject" type="text"></input>
                        </div>
                        <div className="form-textarea">
                            <textarea value={this.state.content} onChange={this.handleText} 
                            placeholder="Type your message here..." required id="text" type="text"></textarea>
                            <button type="button" onClick={this.sendForm}>Send Inquery</button>
                        </div>
                    </form>
                    <div className="contact-footer">
                        <h1 className="footer-description">Guilherme Bromonschenkel © 2019 | Designed and Developed by Guilherme Bromonschenkel.</h1>
                        <a href="https://github.com/guilhermebkel" target="_blank" rel="noopener noreferrer">
                            <img alt="github" className="footer-social" src={Github} />
                        </a>
                        <a href="https://www.behance.net/guilhermebkel" target="_blank" rel="noopener noreferrer">
                            <img alt="behance" className="footer-social" src={Behance} />
                        </a>
                        <a href="https://www.linkedin.com/in/guilhermebkel" target="_blank" rel="noopener noreferrer">
                            <img alt="linkedin" className="footer-social" src={Linkedin} />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5527996334936" target="_blank" rel="noopener noreferrer">
                            <img alt="whatsapp" className="footer-social" src={Whatsapp} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;