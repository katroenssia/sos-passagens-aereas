'use strict';

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const hbs = require('nodemailer-handlebars');
const path = require('path');

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/', (req, res) => {
  const { name, email, phone, people, origin, destiny, datatravel } = req.body;

  function formatDate() {
    const date = new Date(datatravel).toLocaleDateString('pt-BR');
    return date;
  }
  let src = 'https://imgur.com/OR8NiyJ';
  var transport = nodemailer.createTransport({
    service: 'gmail',

    port: 465,
    auth: {
      user: 'arthurnmrocha@gmail.com',
      pass: '1995131313',
    },
  });

  transport.use(
    'compile',
    hbs({
      viewEngine: {
        partialsDir: path.resolve('./email-template/'),
        defaultLayout: undefined,
      },
      viewPath: path.resolve('./email-template/'),
      extName: '.handlebars',
    }),
  );

  let mailOptions = {
    from: '<nãoresponda@sosvianges.com.br>',
    to: 'arthurjoga123@gmail.com',
    subject: `Formulário preenchido website - SOS Passagens Aereas`,

    text: 'testando email',
    template: 'index',

    context: {
      name,
      email,
      phone,
      people,
      origin,
      destiny,
      datatravel: formatDate(),
      src,
    },
  };

  async function send() {
    return await transport.sendMail(mailOptions, (err, data) => {
      if (err) {
        return console.log('Error Ocurs', err);
      }
      return console.log('email enviado!');
    });
  }

  send();
  res.redirect('/');
});

app.listen('3344', () => {
  console.log('server running on port' + '3344');
  console.log('http://127.0.0.1:3344/');
});

//
