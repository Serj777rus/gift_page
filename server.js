const http = require('http');
const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5003;
const server = http.createServer(app);

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 's.gorbachev@webmarvels.ru',
        pass: 'Ft6VwK1jNBbPC63sbxzC'
    }
})
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type']
}))
app.use('/pdfs', express.static('pdfs')); // Указывает, что папка доступна по /pdfs
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.post('/datas', (req, res) => {
    const { image, name, mail, text } = req.body;
    console.log(req.body);
    const images = image.replace(/^data:image\/jpeg;base64,/, '')
    const fileName = `${Date.now()}.jpeg`;
    const outputDir = './pdfs'
    const pathFile = `${outputDir}/${fileName}`;
    fs.writeFile(pathFile, images, 'base64', (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send({message: 'Error creating PDF'});
        }
        const response = transporter.sendMail({
            from: '"Оранжевая Хурма" <s.gorbachev@webmarvels.ru>',
            to: mail,
            subject: 'Подарочный сертификат',
            html: `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width" name="viewport">

<style>body {
width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0;
}
.ExternalClass {
width: 100%;
}
.ExternalClass {
line-height: 100%;
}
#backgroundTable {
margin: 0; padding: 0; width: 100% !important; line-height: 100% !important;
}
body {
background-color: #242424; background-repeat: repeat; background-position: center top;
}
body {
color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; padding: 0; margin: 0; text-align: left; line-height: 1.3;
}
a:hover {
color: #2795b6;
}
a:active {
color: #2795b6;
}
a:visited {
color: #2ba6cb;
}
h1 a:active {
color: #2ba6cb !important;
}
h2 a:active {
color: #2ba6cb !important;
}
h3 a:active {
color: #2ba6cb !important;
}
h4 a:active {
color: #2ba6cb !important;
}
h5 a:active {
color: #2ba6cb !important;
}
h6 a:active {
color: #2ba6cb !important;
}
h1 a:visited {
color: #2ba6cb !important;
}
h2 a:visited {
color: #2ba6cb !important;
}
h3 a:visited {
color: #2ba6cb !important;
}
h4 a:visited {
color: #2ba6cb !important;
}
h5 a:visited {
color: #2ba6cb !important;
}
h6 a:visited {
color: #2ba6cb !important;
}
table.secondary:hover td {
background: #d0d0d0 !important; color: #555555;
}
table.secondary:hover td a {
color: #555555 !important;
}
table.secondary td a:visited {
color: #555555 !important;
}
table.secondary:active td a {
color: #555555 !important;
}
table.success:hover td {
background: #457a1a !important;
}
table.alert:hover td {
background: #970b0e !important;
}
body.outlook p {
display: inline !important;
}
@media only screen and (min-width: 768px) {
  table.container {
    width: 580px !important;
  }
  .mail .hide-for-desktop {
    display: none !important;
  }
  .mail .hide-and-true {
    display: none !important;
  }
  .mail .hide-and-false {
    display: block !important;
  }
  .mail .hide-or-true {
    display: none !important;
  }
}
@media only screen and (max-width: 600px) {
  .mail img {
    max-width: 100% !important; max-height: 100% !important; padding: 0 !important; width: auto !important; height: auto !important;
  }
  .mail .social img {
    width: inherit !important;
  }
  .mail img.normal {
    width: inherit !important;
  }
  .mail center {
    min-width: 0 !important;
  }
  .mail .container {
    width: 100% !important;
  }
  .mail .row {
    width: 100% !important; display: block !important;
  }
  .mail .wrapper {
    display: block !important; padding-right: 0 !important;
  }
  .mail .columns {
    table-layout: fixed !important; float: none !important; width: 100% !important; padding-right: 0px !important; padding-left: 0px !important; display: block !important;
  }
  .mail .column {
    table-layout: fixed !important; float: none !important; width: 100% !important; padding-right: 0px !important; padding-left: 0px !important; display: block !important;
  }
  .mail .wrapper.first .columns {
    display: table !important;
  }
  .mail .wrapper.first .column {
    display: table !important;
  }
  .mail table.columns > tbody > tr > td {
    width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
  }
  .mail table.column > tbody > tr > td {
    width: 100% !important; padding-left: 0 !important; padding-right: 0 !important;
  }
  .mail .columns td.one {
    width: 8.333333% !important;
  }
  .mail .column td.one {
    width: 8.333333% !important;
  }
  .mail .columns td.two {
    width: 16.666666% !important;
  }
  .mail .column td.two {
    width: 16.666666% !important;
  }
  .mail .columns td.three {
    width: 25% !important;
  }
  .mail .column td.three {
    width: 25% !important;
  }
  .mail .columns td.four {
    width: 33.333333% !important;
  }
  .mail .column td.four {
    width: 33.333333% !important;
  }
  .mail .columns td.five {
    width: 41.666666% !important;
  }
  .mail .column td.five {
    width: 41.666666% !important;
  }
  .mail .columns td.six {
    width: 50% !important;
  }
  .mail .column td.six {
    width: 50% !important;
  }
  .mail .columns td.seven {
    width: 58.333333% !important;
  }
  .mail .column td.seven {
    width: 58.333333% !important;
  }
  .mail .columns td.eight {
    width: 66.666666% !important;
  }
  .mail .column td.eight {
    width: 66.666666% !important;
  }
  .mail .columns td.nine {
    width: 75% !important;
  }
  .mail .column td.nine {
    width: 75% !important;
  }
  .mail .columns td.ten {
    width: 83.333333% !important;
  }
  .mail .column td.ten {
    width: 83.333333% !important;
  }
  .mail .columns td.eleven {
    width: 91.666666% !important;
  }
  .mail .column td.eleven {
    width: 91.666666% !important;
  }
  .mail .columns td.twelve {
    width: 100% !important;
  }
  .mail .column td.twelve {
    width: 100% !important;
  }
  .mail td.offset-by-eleven {
    padding-left: 0 !important;
  }
  .mail td.offset-by-ten {
    padding-left: 0 !important;
  }
  .mail td.offset-by-nine {
    padding-left: 0 !important;
  }
  .mail td.offset-by-eight {
    padding-left: 0 !important;
  }
  .mail td.offset-by-seven {
    padding-left: 0 !important;
  }
  .mail td.offset-by-six {
    padding-left: 0 !important;
  }
  .mail td.offset-by-five {
    padding-left: 0 !important;
  }
  .mail td.offset-by-four {
    padding-left: 0 !important;
  }
  .mail td.offset-by-three {
    padding-left: 0 !important;
  }
  .mail td.offset-by-two {
    padding-left: 0 !important;
  }
  .mail td.offset-by-one {
    padding-left: 0 !important;
  }
  .mail table.columns td.expander {
    width: 1px !important;
  }
  .mail .right-text-pad {
    padding-left: 10px !important;
  }
  .mail .text-pad-right {
    padding-left: 10px !important;
  }
  .mail .left-text-pad {
    padding-right: 10px !important;
  }
  .mail .text-pad-left {
    padding-right: 10px !important;
  }
  .mail .hide-for-small {
    display: none !important;
  }
  .mail .show-for-desktop {
    display: none !important;
  }
  .mail .show-for-small {
    display: block !important; width: auto !important; overflow: visible !important;
  }
  .mail .hide-for-desktop {
    display: block !important; width: auto !important; overflow: visible !important;
  }
  .mail .button-hide-for-small {
    display: none !important;
  }
  .mail .button-show-for-desktop {
    display: none !important;
  }
  .mail .button-show-for-small {
    display: table !important; overflow: visible !important;
  }
  .mail .button-hide-for-desktop {
    display: table !important; overflow: visible !important;
  }
  .mail .hide-and-true {
    display: none !important;
  }
  .mail .hide-and-false {
    display: block !important;
  }
  .mail .hide-or-true {
    display: none !important;
  }
}
</style></head>
<body style="width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; background: #242424 repeat center top; margin: 0; padding: 0;" bgcolor="#242424">
<table class="mail" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; height: 100%; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; background: #242424 repeat center top; margin: 0; padding: 0;" bgcolor="#242424">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" class="center" valign="top" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;">
<center style="width: 100%; min-width: 580px;">
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #f5f5f5 repeat center top; padding: 0px;" bgcolor="#f5f5f5">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 30px 0px 0px;" align="left" valign="top">
<table class="five columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 224.1666666667px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px 10px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 20px;" valign="top">
<!--[if mso]>
<img alt='logo.png' src='https://app.makemail.ru/content/c0e878604d1186b27b5321e341c3af94.png' width='64'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="logo.png" class="left" height="63" src="https://app.makemail.ru/content/c0e878604d1186b27b5321e341c3af94.png" style="width: 64px !important; height: 63px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="64" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="seven columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 325.8333333333px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 10px 0px 0px;" align="left" valign="top">

</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent url('https://app.makemail.ru/content/3c795ee09bdfcb804a4f32bef0a7a22c.png') no-repeat center center; padding: 0px 0;" bgcolor="transparent" background="https://app.makemail.ru/content/3c795ee09bdfcb804a4f32bef0a7a22c.png">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 30px 0px 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 275px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 30px 0px 0px 40px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="line-height: 37px; font-size: 32px; color: #f5f5f5;">Устали от&nbsp;распродаж на&nbsp;Черную пятницу?</span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 0px 0px 40px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="line-height: 30px; font-size: 26px; color: #7e7e7e;">Мы приготовили для&nbsp;Вас нечто особенное</span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 18px 0px 20px 40px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="text-decoration: underline;"><span style="line-height: 24px; color: #fff1be; text-decoration: underline;">Узнать подробнее &gt;&gt;</span></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 275px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='Group75.png' src='https://app.makemail.ru/content/bb3f85b7c1b50428d928ceaeeee26b24.png' width='241'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="Group75.png" class="center" height="181" src="https://app.makemail.ru/content/bb3f85b7c1b50428d928ceaeeee26b24.png" style="width: 241px !important; height: 181px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="241" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #333333 repeat center top; padding: 0px 0;" bgcolor="#333333">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 4px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<hr class="" style="background-color: #ffd86e; color: #d9d9d9; height: 1px; border: none;">
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #333333 repeat center top; padding: 0px;" bgcolor="#333333">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='still-life-rendering-jackets-display 1.png' src='https://admin.webmarvels.ru/pdfs/${fileName}' width='580'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="still-life-rendering-jackets-display 1.png" class="left" height="472" src="https://admin.webmarvels.ru/pdfs/${fileName}" style="width: 580px; height: auto; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="580" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: #333333 repeat center center; margin: 0; padding: 24px 0px 14px 30px;" align="left" bgcolor="#333333" valign="top">
<p style="text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 18px;"><span style="line-height: 21px; color: #f5f5f5;"><span style="color: #f5f5f5;">НА ЧТО ПОТРАТИТЬ ПОДАРОЧНУЮ КАРТУ</span></span></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #333333 repeat center top; padding: 0px;" bgcolor="#333333">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 30px 0px 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 275px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 0px 20px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px 10px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/0ec5785066ba94814e1ce9a78407c79b.png' width='245'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="left" height="143" src="https://app.makemail.ru/content/0ec5785066ba94814e1ce9a78407c79b.png" style="width: 245px; height: 143px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="245" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 15px; line-height: 17px; color: #ffd86e;"><strong>Чай</strong></span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 12px; line-height: 14px; color: #f5f5f5;">Свыше 1000 сортов, в том числе и ваш любимый!</span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="text-decoration: underline; font-size: 12px;"><span style="line-height: 14px; color: #ffd86e; text-decoration: underline;">Подробнее &gt;&gt;</span></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 275px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 20px 0px 0px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px 10px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/817a1b22f8d005c88b9b4e6e9eb15079.png' width='245'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="left" height="143" src="https://app.makemail.ru/content/817a1b22f8d005c88b9b4e6e9eb15079.png" style="width: 245px; height: 143px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="245" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="color: #ffd86e;"><span style="font-size: 15px;"><strong>Кофе</strong></span></span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 12px; line-height: 14px; color: #f5f5f5;">Со всего света! Даже такой, как вы пили в то особенное утро</span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="text-decoration: underline; font-size: 12px;"><span style="line-height: 14px; color: #ffd86e; text-decoration: underline;">Подробнее &gt;&gt;</span></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #333333 repeat center top; padding: 0px;" bgcolor="#333333">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #333333 repeat center top; padding: 0px;" bgcolor="#333333">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 30px 0px 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 275px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 0px 0px 20px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px 10px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/ba847526b2db505ed6d91ec341ba2c95.png' width='245'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="left" height="143" src="https://app.makemail.ru/content/ba847526b2db505ed6d91ec341ba2c95.png" style="width: 245px; height: 143px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="245" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 15px; line-height: 17px; color: #ffd86e;"><strong>Десерты</strong></span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 12px; line-height: 14px; color: #f5f5f5;">Сладкие и полезные, в том числе без сахара!</span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="text-decoration: underline; font-size: 12px;"><span style="line-height: 14px; color: #ffd86e; text-decoration: underline;">Подробнее &gt;&gt;</span></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 275px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px 20px 0px 0px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px 0px 10px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/2411ff42255e9c296e7c3c2e52632dc6.png' width='245'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="left" height="143" src="https://app.makemail.ru/content/2411ff42255e9c296e7c3c2e52632dc6.png" style="width: 245px; height: 143px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="245" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="color: #ffd86e;"><span style="font-size: 15px;"><strong>Посуда</strong></span></span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 12px; line-height: 14px; color: #f5f5f5;">Невероятной красоты, чтобы ваше общение было более теплым</span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="text-decoration: underline; font-size: 12px;"><span style="line-height: 14px; color: #ffd86e; text-decoration: underline;">Подробнее &gt;&gt;</span></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #333333 repeat center top; padding: 0px;" bgcolor="#333333">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #0c0b0e repeat center top; padding: 0px 0;" bgcolor="#0c0b0e">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 4px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<hr class="" style="background-color: #ffd86e; color: #d9d9d9; height: 1px; border: none;">
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 4px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #0c0b0e repeat center top; padding: 0px;" bgcolor="#0c0b0e">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: #0c0b0e repeat center center; padding: 0;" width="100%" bgcolor="#0c0b0e">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 0% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="0%" align="left" bgcolor="transparent" valign="top">

</td>
<td height="%" style="background-color: #e0a332; width: 3069771.272727273% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="3069771.272727273%" align="left" bgcolor="#e0a332" valign="top">
<table class="button center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; display: block; line-height: initial !important; margin: 0; padding: 30px 0px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='3%' fill='t' fillcolor='#242424' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:136px;height:32px;mso-padding-alt:0;padding:8px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #f5f5f5; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
За Покупками
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="line-height: 14px; color: #f5f5f5 !important; font-family: Arial, sans-serif !important; font-size: 14px !important; display: inline-block; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; text-decoration: none; font-weight: bold; text-align: center; height: 100%; width: auto; background: #242424 repeat center center; padding: 8px 20px;">За Покупками</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>



</td>
<td height="%" style="background-color: transparent; width: 1256.25% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" width="1256.25%" align="left" bgcolor="transparent" valign="top">

</td>
</tr>
</tbody>
</table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: #0c0b0e repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="#0c0b0e" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>

<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #f5f5f5 repeat center top; padding: 0px;" bgcolor="#f5f5f5">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 10px 0px;" valign="top">
<!--[if mso]>
<a href='https://notisend.ru/email/?utm_source=logo_sent_by'>
<img alt='logo.png' src='https://app.makemail.ru/content/fbdfa194989d975f4f439881e0627805.png' width='140'>
</a>
<![endif]-->
<!--[if !mso]> <!---->
<a href="https://notisend.ru/email/?utm_source=logo_sent_by" style="color: #2ba6cb; text-decoration: none;">
<img alt="logo.png" class="center" height="139" src="https://app.makemail.ru/content/fbdfa194989d975f4f439881e0627805.png" style="width: 140px !important; height: 139px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto; border: none;" width="140" align="none">
</a>
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 10px 0px;" align="left" valign="top">
<div class="center social" style="text-align: center;" align="center">
<a href="" style="padding-right: 5px; text-decoration: none; color: #2ba6cb;">
<img alt="" src="https://app.makemail.ru/content/1b636fc57e26f4ad9a7345771482f9d5.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
<a href="" style="padding-right: 5px; text-decoration: none; color: #2ba6cb;">
<img alt="" src="https://app.makemail.ru/content/854a87836dba5ff6eba429dbdd40bb57.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
<a href="" style="padding-right: 5px; text-decoration: none; color: #2ba6cb;">
<img alt="" src="https://app.makemail.ru/content/6cbb7184871a970eb5129599f326b90f.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
</div>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-size: 12px; color: #808080;">Вы получили это письмо на электронный адрес <strong>[%email%]</strong>,&nbsp;так как являетесь клиентом <strong>[%company-name%]</strong></span></p>
</td>
</tr>
</tbody></table>


<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="center" style="text-align: center; font-size: 12px; font-family: Helvetica, Arial, sans-serif; color: #808080; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 0px 10px;" align="center" bgcolor="transparent" valign="top">
Если вы не хотите больше получать наши письма, просто перейдите по ссылке
<a href="[%unsubscribe_link%]" style="color: #2ba6cb; text-decoration: none;">отказаться от рассылки</a>
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Arial, sans-serif; font-weight: normal; font-size: 14px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>

</tr>
</tbody></table>
</td>
</tr>
</tbody></table>


</center>
</td>
</tr>
</tbody></table>




</body></html>`,
        })
        if (response) {
            console.log(response)
            res.status(200).send({message: 'Successfully created PDF'});
        }
    })
})


server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})