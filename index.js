'use strict';

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const path = require('path');

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/', (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.listen('3344', () => {
  console.log('server running on port' + '3344');
  console.log('http://127.0.0.1:3344/');
});

//
// var transport = nodemailer.createTransport(
//   {
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   },
//   {
//     from: `${process.env.SMTP_NAME} <${process.env.SMTP_EMAIL}>`,
//   },
// );

// async function send(options) {
//   await transporter.sendMail(options);
// }
