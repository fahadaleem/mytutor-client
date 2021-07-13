import emailjs from 'emailjs-com';


import{ init } from 'emailjs-com';
init("user_n2kdHYMvdab7kFxy6a8uC");

export default async function handleSendEmail (type, toName, toEmail, message){

    const templatesType={
        verification:"template_dn57iys"
    }

    emailjs.send("service_te9r6wi", templatesType[type], {
        from_name:"Mytutor",
        to_name:toName,
        message,
        to_email:toEmail,
        reply_to:"faleem396@gmail.com"
    }).then(resp=>{
        return resp
    }).catch(error=>{
        return error
    })

}