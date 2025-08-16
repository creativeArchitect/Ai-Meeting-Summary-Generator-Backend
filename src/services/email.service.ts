import nodemailer from 'nodemailer';

const sendEmail = async (to: string, subject: string, body: string)=> {
    try{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        })

        console.log("transposrter: ", transporter);
    
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text: body
        })

        console.log("info: ", transporter);
    
        return info;
    }catch(err){
        console.log("error in sendEmail service", err);
    }
}


export default sendEmail;