import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD

//ihnceylxyfxehial
export const sender = nodemailer.createTransport({


    service: "gmail",
    auth: {
        user: email,
        pass: password,
    }
});

export const mailOptions = {
    from: email,
    to: email,
}
