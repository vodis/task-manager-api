const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv')

const result = dotenv.config({ path: '.env' })
if (result.error) {
    throw result.error;
}

const { FROM_EMAIL } = process.env;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: FROM_EMAIL,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: FROM_EMAIL,
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
