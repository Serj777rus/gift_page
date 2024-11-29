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
    const fileName = Date.now();
    const outputDir = './pdfs'
    const pathFile = `${outputDir}/${fileName}.jpeg`;
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
background-color: #a5a5a5; background-repeat: repeat; background-position: center top;
}
body {
color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; padding: 0; margin: 0; text-align: left; line-height: 1.3;
}
a:hover {
color: #2795b6;
}
a:active {
color: #2795b6;
}
a:visited {
color: #ef7197;
}
h1 a:active {
color: #ef7197 !important;
}
h2 a:active {
color: #ef7197 !important;
}
h3 a:active {
color: #ef7197 !important;
}
h4 a:active {
color: #ef7197 !important;
}
h5 a:active {
color: #ef7197 !important;
}
h6 a:active {
color: #ef7197 !important;
}
h1 a:visited {
color: #ef7197 !important;
}
h2 a:visited {
color: #ef7197 !important;
}
h3 a:visited {
color: #ef7197 !important;
}
h4 a:visited {
color: #ef7197 !important;
}
h5 a:visited {
color: #ef7197 !important;
}
h6 a:visited {
color: #ef7197 !important;
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
<body style="width: 100% !important; min-width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; text-align: left; line-height: 1.3; background: #a5a5a5 repeat center top; margin: 0; padding: 0;" bgcolor="#a5a5a5">
<table class="mail" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; height: 100%; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; background: #a5a5a5 repeat center top; margin: 0; padding: 0;" bgcolor="#a5a5a5">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" class="center" valign="top" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;">
<center style="width: 100%; min-width: 580px;">
<table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; max-width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #222222 repeat center top; padding: 0px 0;" bgcolor="#222222">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/511f30bff2f31e9cb2e3ed4653b7cb72.png' width='300'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="50" src="https://app.makemail.ru/content/511f30bff2f31e9cb2e3ed4653b7cb72.png" style="width: 300px; height: 50px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="300" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/5a22f4a99b84de2f3a7915dc336b60e3.png' width='580'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="left" height="131" src="https://app.makemail.ru/content/5a22f4a99b84de2f3a7915dc336b60e3.png" style="width: 580px; height: 131px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="580" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table align="left" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="left" style="text-align: left; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 32px;" valign="top">
<!--[if mso]>
<img alt='2149296025.jpg' src='https://app.makemail.ru/content/573d467c5f284bebfc7c2cccbbbcf360.jpg' width='516'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="2149296025.jpg" class="left" height="344" src="https://admin.webmarvels.ru/pdfs/${fileName}.jpg" style="width: 516px; height: 344px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: left; clear: both; display: block;" width="516" align="left">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px 0;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: #ffffff repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="#ffffff" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #ffffff repeat center top; padding: 0px 0;" bgcolor="#ffffff">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 290px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="button center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; display: block; line-height: initial !important; margin: 0; padding: 0px 30px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='5%' fill='t' fillcolor='#4a494e' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:166px;height:43px;mso-padding-alt:0;padding:10px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #FFF; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
ДЛЯ ЖЕНЩИН &gt;
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="line-height: 16px; font-family: Arial, sans-serif !important; font-size: 16px !important; display: inline-block; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; color: #ffffff; text-decoration: none; font-weight: bold; text-align: center; height: 100%; width: auto; background: #4a494e repeat center center; padding: 10px 20px;">ДЛЯ ЖЕНЩИН &gt;</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 290px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="button center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; display: block; line-height: initial !important; margin: 0; padding: 0px 30px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='5%' fill='t' fillcolor='#28282a' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:163px;height:43px;mso-padding-alt:0;padding:10px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #FFF; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
ДЛЯ МУЖЧИН &gt;
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="line-height: 16px; font-family: Arial, sans-serif !important; font-size: 16px !important; display: inline-block; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; color: #ffffff; text-decoration: none; font-weight: bold; text-align: center; height: 100%; width: auto; background: #28282a repeat center center; padding: 10px 20px;">ДЛЯ МУЖЧИН &gt;</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #333335 repeat center top; padding: 0px 0;" bgcolor="#333335">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 193.3333333333px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px 0px 0px 10px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/0daf53bb591f27253205687140a2e19c.png' width='180'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="124" src="https://app.makemail.ru/content/0daf53bb591f27253205687140a2e19c.png" style="width: 180px; height: 124px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="180" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: repeat center center; padding: 0;" width="100%">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 25.70504054054054% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="25.70504054054054%" align="left" bgcolor="transparent" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: #333335 repeat center center; margin: 0; padding: 10px 10px 0px;" align="left" bgcolor="#333335" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 21px;">&nbsp;<strong>-50%</strong></span></p>
</td>
</tr>
</tbody></table>



</td>
<td height="%" style="background-color: transparent; width: 25.72986111111111% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="25.72986111111111%" align="left" bgcolor="transparent" valign="top">

</td>
</tr>
</tbody>
</table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 12px 20px 0px 30px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 14px; line-height: 16px; color: #eb7520;"><strong><span style="font-family: Arial, sans-serif;">16 760 ₽&nbsp;&nbsp;</span></strong></span> <span style="text-decoration: line-through; font-family: Arial, sans-serif; font-size: 14px; line-height: 16px; color: #64635e;">33 520 ₽</span></p>
</td>
</tr>
</tbody></table>


<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 50% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="50%" align="left" bgcolor="transparent" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 0px 30px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 14px; line-height: 19px; color: #f3f3f3;">Кроссовки Jordan</span>&nbsp;</p>
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 28px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
</tr>
</tbody>
</table>


<table class="button center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; display: block; line-height: initial !important; margin: 0; padding: 0px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='3%' fill='t' fillcolor='#ffcb6c' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:90px;height:40px;mso-padding-alt:0;padding:10px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #28282a; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
ХОЧУ &gt;
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="line-height: 14px; color: #28282a !important; font-family: Arial, sans-serif !important; font-size: 14px !important; display: inline-block; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; text-decoration: none; font-weight: bold; text-align: center; height: 100%; width: auto; background: #ffcb6c repeat center center; padding: 10px 20px;">ХОЧУ &gt;</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 193.3333333333px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/0fd4bd4cb4a91632765f79b7ce4dee6f.png' width='180'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="124" src="https://app.makemail.ru/content/0fd4bd4cb4a91632765f79b7ce4dee6f.png" style="width: 180px; height: 124px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="180" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 50% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="50%" align="left" bgcolor="transparent" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: #333335 repeat center center; margin: 0; padding: 10px 10px 0px;" align="left" bgcolor="#333335" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 21px;">&nbsp;<strong>-50%</strong></span></p>
</td>
</tr>
</tbody></table>



</td>
<td height="%" style="background-color: transparent; width: 50% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="50%" align="left" bgcolor="transparent" valign="top">

</td>
</tr>
</tbody>
</table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 12px 20px 0px 30px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 14px; line-height: 16px; color: #eb7520;"><strong><span style="font-family: Arial, sans-serif;">14 400 ₽&nbsp;&nbsp;</span></strong></span> <span style="text-decoration: line-through; font-family: Arial, sans-serif; font-size: 14px; line-height: 16px; color: #64635e;">28 800 ₽</span></p>
</td>
</tr>
</tbody></table>


<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 50% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="50%" align="left" bgcolor="transparent" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 0px 30px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 14px; line-height: 19px; color: #f3f3f3;">Кроссовки Adidas Originals</span></p>
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
</tr>
</tbody>
</table>


<table class="button center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; display: block; line-height: initial !important; margin: 0; padding: 0px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='3%' fill='t' fillcolor='#ffcb6c' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:90px;height:40px;mso-padding-alt:0;padding:10px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #28282a; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
ХОЧУ &gt;
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="line-height: 14px; color: #28282a !important; font-family: Arial, sans-serif !important; font-size: 14px !important; display: inline-block; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; text-decoration: none; font-weight: bold; text-align: center; height: 100%; width: auto; background: #ffcb6c repeat center center; padding: 10px 20px;">ХОЧУ &gt;</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="four columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 193.3333333333px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px 10px 0px 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 20px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/9312c26e889b41f13774bc9433869694.png' width='180'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="124" src="https://app.makemail.ru/content/9312c26e889b41f13774bc9433869694.png" style="width: 180px; height: 124px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="180" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 50% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="50%" align="left" bgcolor="transparent" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: #333335 repeat center center; margin: 0; padding: 10px 10px 0px;" align="left" bgcolor="#333335" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; color: #ffffff; font-size: 18px; line-height: 21px;">&nbsp;<strong>-25%</strong></span></p>
</td>
</tr>
</tbody></table>



</td>
<td height="%" style="background-color: transparent; width: 50% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="50%" align="left" bgcolor="transparent" valign="top">

</td>
</tr>
</tbody>
</table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 12px 20px 0px 30px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 14px; line-height: 16px; color: #eb7520;"><strong><span style="font-family: Arial, sans-serif;">35 250 ₽&nbsp;&nbsp;</span></strong></span> <span style="text-decoration: line-through; font-family: Arial, sans-serif; font-size: 14px; line-height: 16px; color: #64635e;">47 000 ₽</span></p>
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 0px 30px;" align="left" bgcolor="transparent" valign="top">
<p style="color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; text-align: left; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="left"><span style="font-size: 14px; line-height: 19px; color: #f3f3f3;">Кроссовки Nike</span>&nbsp;</p>
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 28px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table class="button center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; display: block; line-height: initial !important; margin: 0; padding: 0px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='3%' fill='t' fillcolor='#ffcb6c' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:90px;height:40px;mso-padding-alt:0;padding:10px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #28282a; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
ХОЧУ &gt;
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="line-height: 14px; color: #28282a !important; font-family: Arial, sans-serif !important; font-size: 14px !important; display: inline-block; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; text-decoration: none; font-weight: bold; text-align: center; height: 100%; width: auto; background: #ffcb6c repeat center center; padding: 10px 20px;">ХОЧУ &gt;</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #333335 repeat center top; padding: 0px;" bgcolor="#333335">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 15px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: url('https://app.makemail.ru/content/19dad7feb27dd00b6c8010078f90b16f.png') no-repeat center top; padding: 0px 0;" background="https://app.makemail.ru/content/19dad7feb27dd00b6c8010078f90b16f.png">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 40px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table class="button center" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; overflow: hidden; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: center; width: auto !important; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; display: block; line-height: initial !important; margin: 0; padding: 24px 0px 16px;" align="center" valign="top">
<!--[if mso]>
<p style='line-height:0;margin:0;'>&nbsp;</p>
<v:roundrect arcsize='5%' fill='t' fillcolor='#28282a' href='' stroke='f' strokecolor='' strokeweight='1px' style='v-text-anchor:middle;width:203px;height:40px;mso-padding-alt:0;padding:10px 20px;' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:w='urn:schemas-microsoft-com:office:word'>
<w:anchorlock>
<center style='color: #ffffff; font-family:sans-serif; font-size:13px; font-weight:bold; mso-line-height-rule:exactly; mso-text-raise:4px'>
БОЛЬШЕ КРОССОВОК &gt;
</center>
</w:anchorlock>
</v:roundrect>
<![endif]-->
<!--[if !mso]>
<!---->
<a href="" style="line-height: 14px; color: #ffffff !important; font-family: Arial, sans-serif !important; font-size: 14px !important; display: inline-block; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; text-decoration: none; font-weight: bold; text-align: center; height: 100%; width: auto; background: #28282a repeat center center; padding: 10px 20px;">БОЛЬШЕ КРОССОВОК &gt;</a>
<!-- <![endif]-->
<!--[endif]---->
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 84px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #f0f0f0 repeat center top; padding: 0px;" bgcolor="#f0f0f0">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 22px 10px 4px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; font-size: 26px; line-height: 36px; color: #333333;"><strong>Сервис для вас</strong></span></p>
</td>
</tr>
</tbody></table>


<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<hr class="" style="background-color: #333333; color: #d9d9d9; height: 1px; border: none;">
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: #f0f0f0 repeat center top; padding: 0px;" bgcolor="#f0f0f0">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="three columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 145px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 12px 0px 0px 30px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 4px 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/9e30b022447e8d6c244e72701a3d42cb.png' width='74'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="74" src="https://app.makemail.ru/content/9e30b022447e8d6c244e72701a3d42cb.png" style="width: 74px; height: 74px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="74" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 0px 0px 20px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-size: 16px; line-height: 18px; font-family: Arial, sans-serif;"><strong>Быстрая доставка</strong></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="three columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 145px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 12px 0px 0px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 4px 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/22bfa91ac572b1d7f93bb751b1ca067c.png' width='74'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="74" src="https://app.makemail.ru/content/22bfa91ac572b1d7f93bb751b1ca067c.png" style="width: 74px; height: 74px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="74" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 0px 24px 20px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; font-size: 16px;"><span style="line-height: 18px;"><strong>Поддержка&nbsp;</strong></span></span><span style="font-family: Arial, sans-serif; font-size: 16px;"><strong style="background-color: transparent;"><span style="line-height: 18px;">24 / 7</span></strong></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="three columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 145px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 12px 0px 0px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 4px 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/a5b50cd7ec95564abc7a3d93638c7fa0.png' width='74'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="74" src="https://app.makemail.ru/content/a5b50cd7ec95564abc7a3d93638c7fa0.png" style="width: 74px; height: 74px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="74" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 0px 0px 20px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-size: 16px; line-height: 18px; font-family: Arial, sans-serif;"><strong>Гарантия качества</strong></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="three columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 145px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 12px 30px 0px 0px;" align="left" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 4px 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/9c0600a3ba74127dfe0cb49f92c1e49f.png' width='74'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="74" src="https://app.makemail.ru/content/9c0600a3ba74127dfe0cb49f92c1e49f.png" style="width: 74px; height: 74px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="74" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 0px 0px 20px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; font-size: 16px; line-height: 18px;"><strong>Бонусы и подарки</strong></span></p>
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>


<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<hr class="" style="background-color: #f0f0f0; color: #d9d9d9; height: 1px; border: none;">
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 290px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 50% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="50%" align="left" bgcolor="transparent" valign="top">
<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" valign="top">
<!--[if mso]>
<img alt='' src='https://app.makemail.ru/content/511f30bff2f31e9cb2e3ed4653b7cb72.png' width='290'>
<![endif]-->
<!--[if !mso]> <!---->
<img alt="" class="center" height="48" src="https://app.makemail.ru/content/511f30bff2f31e9cb2e3ed4653b7cb72.png" style="width: 290px; height: 48px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto;" width="290" align="none">
<!-- <![endif]-->
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
</tr>
</tbody>
</table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 290px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 5025% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="5025%" align="left" bgcolor="transparent" valign="top">
<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 4px 0px 0px;" align="left" valign="top">
<div class="center social" style="text-align: center;" align="center">
<a href="" style="padding-right: 5px; text-decoration: none; color: #ef7197;">
<img alt="" src="https://app.makemail.ru/content/33e6cb2adec182008ead2cab354a56d3.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
<a href="" style="padding-right: 5px; text-decoration: none; color: #ef7197;">
<img alt="" src="https://app.makemail.ru/content/1f42e0d9d4178aacffd8663736327cf2.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
<a href="" style="padding-right: 5px; text-decoration: none; color: #ef7197;">
<img alt="" src="https://app.makemail.ru/content/4f913e2d4fbc13def2e905455b3dc277.png" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: inherit; clear: both; display: inline; border: none;" align="inherit">
</a>
<!--[if mso]>
&nbsp;
<![endif]-->
</div>
</td>
</tr>
</tbody></table>


<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
</tr>
</tbody>
</table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first " style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 290px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 50% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="50%" align="left" bgcolor="transparent" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; font-size: 20px; line-height: 23px; color: #333333;"><strong>8 800 987 65 43</strong></span></p>
</td>
</tr>
</tbody></table>



</td>
</tr>
</tbody>
</table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
</tr>
</tbody></table>
</td>
<td class="wrapper last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="six columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 290px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="table-full" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; background: transparent repeat center center; padding: 0;" width="100%" bgcolor="transparent">
<tbody>
<tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td height="%" style="background-color: transparent; width: 5025% !important; height: % !important; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" width="5025%" align="left" bgcolor="transparent" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 10px 0px 0px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; font-size: 16px; line-height: 18px; color: #333333;">contact@company.ru</span></p>
</td>
</tr>
</tbody></table>



</td>
</tr>
</tbody>
</table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: transparent repeat center top; padding: 0px;" bgcolor="transparent">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table style="width: 100%; border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left"><td class="" style="font-size: 1px; line-height: 0; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 12px 0px 0px;" align="left" bgcolor="transparent" valign="top">&nbsp;</td>
</tr></tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top">
<table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 100%; position: relative; display: block; background: no-repeat center top; padding: 0px;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="wrapper first last" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; position: relative; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px;" align="left" valign="top">
<table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; width: 580px; margin: 0 auto; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0px 10px;" align="left" valign="top">
<table class="table-block" width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; background: transparent repeat center center; margin: 0; padding: 10px 20px 0px;" align="left" bgcolor="transparent" valign="top">
<p style="text-align: center; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; line-height: 1.3; margin: 0 0 10px; padding: 0;" align="center"><span style="font-family: Arial, sans-serif; color: #333333; font-size: 13px; line-height: 16px;">Вы получили это письмо на электронный адрес <strong>[%email%]</strong>,&nbsp;так как являетесь клиентом <strong>[%company-name%]</strong></span></p>
</td>
</tr>
</tbody></table>


<table width="100%" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: left; padding: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td class="center" style="text-align: center; font-size: 13px; font-family: Arial, sans-serif; color: #333333; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; font-weight: normal; background: transparent repeat center center; margin: 0; padding: 0px 40px;" align="center" bgcolor="transparent" valign="top">
Если вы не хотите получать наши письма, просто перейдите по ссылке 
<a href="[%unsubscribe_link%]" style="color: #25a3e2; text-decoration: none;">отказаться от рассылки</a>
</td>
</tr>
</tbody></table>


<table align="center" style="border-collapse: collapse; border-spacing: 0; overflow: hidden; width: 100%; vertical-align: top; text-align: left; padding: 0; border: 0;">
<tbody><tr style="vertical-align: top; text-align: left; padding: 0;" align="left">
<td align="center" style="text-align: center; word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; width: 100%; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 15px 0px;" valign="top">
<!--[if mso]>
<a href='https://notisend.ru/email/?utm_source=logo_sent_by'>
<img alt='Отправлено через NotiSend' src='https://app.makemail.ru/content/d2d2f2f1ed890e948f8494d2dae5da3b.png' width='140'>
</a>
<![endif]-->
<!--[if !mso]> <!---->
<a href="https://notisend.ru/email/?utm_source=logo_sent_by" style="color: #ef7197; text-decoration: none;">
<img alt="Отправлено через NotiSend" class="center" height="40" src="https://app.makemail.ru/content/d2d2f2f1ed890e948f8494d2dae5da3b.png" style="width: 140px !important; height: 40px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; max-width: 100%; float: none; clear: both; display: block; margin: 0 auto; border: none;" width="140" align="none">
</a>
<!-- <![endif]-->
</td>
</tr>
</tbody></table>



</td>
<td class="expander" style="word-break: break-word; -webkit-hyphens: none; -moz-hyphens: none; hyphens: none; border-collapse: collapse !important; vertical-align: top; text-align: left; width: 100%; visibility: hidden; color: #333333; font-family: Helvetica, Arial, sans-serif; font-weight: normal; font-size: 13px; margin: 0; padding: 0;" align="left" valign="top"></td>
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