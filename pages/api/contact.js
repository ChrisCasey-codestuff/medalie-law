// pages/api/contact.js
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const transporter = nodemailer.createTransport({
  // Set up your email service configuration
  service: 'gmail',
  auth: {
    user: 'chris.casey1234@gmail.com',
    pass: 'hoxx yovj ueei cway',
  },
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Parse the form data
      const { name, email, message } = req.body;
      console.log(req.body);

      // Create the email content
      const mailOptions = {
        from: email,
        to: 'chris.casey1234@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
