import * as emailjs from 'emailjs-com'

const credentials = {
    user_id: 'user_8btLL2N8rt2hJjwJWQdaj',
    service_id: 'gmail',
    template_id: 'portfolio'
}

export default async function sendMail(data){
    try{
        await emailjs.send(credentials.service_id, credentials.template_id, data, credentials.user_id)
    }
    catch(error){
        console.error(error)
    }
}