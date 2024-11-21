const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or any other service you use
    auth: {
      user: 'owoyeminiyi2@gmail.com',
      pass: 'lqzj dyuj czxh kgxq', // Use App Passwords for Gmail
    },
  });

  const mailOptions = {
    from: email,
    to: 'owoyeminiyi2@gmail.com', // Your inbox
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email');
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
