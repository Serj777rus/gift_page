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
    const images = image.replace(/^data:image\/png;base64,/, '')
    const fileName = Date.now();
    const outputDir = './pdfs'
    const pathFile = `${outputDir}/${fileName}.png`;
    fs.writeFile(pathFile, images, 'base64', (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send({message: 'Error creating PDF'});
        }
        const response = transporter.sendMail({
            from: '"Оранжевая Хурма" <s.gorbachev@webmarvels.ru>',
            to: mail,
            subject: 'Подарочный сертификат',
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
                        <html>
                        <head>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400&display=swap" em-class="em-font-Mulish-Regular">
                            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                            <meta name="x-apple-disable-message-reformatting">
                            <meta name="viewport" content="width=device-width, initial-scale=1">
                            <title>Черная пятница уже началась!</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400&display=swap" em-class="em-font-Montserrat-Regular"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700&display=swap" em-class="em-font-Montserrat-Bold"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400&display=swap" em-class="em-font-Inter-Regular"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair Display:ital,wght@0,700&display=swap" em-class="em-font-PlayfairDisplay-Bold"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair Display:ital,wght@0,700&display=swap" em-class="em-font-PlayfairDisplay-Bold">
                            <style type="text/css">
                                html {
                                    -webkit-text-size-adjust: none;
                                    -ms-text-size-adjust: none;
                                }
                            </style>
                            <style em="styles">
                        .em-font-Inter-Regular,.em-font-Mulish-Regular {
                            font-weight: 400!important;
                        }
                        .em-font-Mulish-Regular {
                            font-family: Mulish,sans-serif!important;
                        }
                        .em-font-Inter-Regular {
                            font-family: Inter,sans-serif!important;
                        }
                        @media only screen and (max-device-width:660px),only screen and (max-width:660px) {
                            .em-narrow-table {
                                width: 100%!important;
                                max-width: 660px!important;
                                min-width: 320px!important;
                            }
                            .em-mob-wrap.em-mob-wrap-cancel,.noresp-em-mob-wrap.em-mob-wrap-cancel {
                                display: table-cell!important;
                            }
                            .em-mob-padding_bottom-20 {
                                padding-bottom: 20px!important;
                            }
                            .em-mob-width-auto {
                                width: auto!important;
                            }
                            .em-mob-width-100perc {
                                width: 100%!important;
                                max-width: 100%!important;
                            }
                            .em-mob-wrap {
                                display: block!important;
                            }
                            .em-mob-padding_right-20 {
                                padding-right: 20px!important;
                            }
                            .em-mob-padding_left-20 {
                                padding-left: 20px!important;
                            }
                        }
                        </style>
                            <!--[if gte mso 9]>
                            <xml>
                                <o:OfficeDocumentSettings>
                                <o:AllowPNG></o:AllowPNG>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                                </o:OfficeDocumentSettings>
                            </xml>
                            <![endif]-->
                        </head>
                        <body style="margin: 0px; padding: 0px; background-color: #171717;">
                            <span class="preheader" style="visibility: hidden; opacity: 0; color: #171717; height: 0px; width: 0px; font-size: 1px; display: none !important;">&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;</span>
                            <!--[if !mso]><!-->
                            <div style="font-size:0px;color:transparent;opacity:0;">
                                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                            </div>
                            <!--<![endif]-->
                            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: 1px; line-height: normal; background-color: #171717;" bgcolor="#171717">
                                <tr em="group">
                                    <td align="center">
                                        <!--[if (gte mso 9)|(IE)]>
                                        <table cellpadding="0" cellspacing="0" border="0" width="660"><tr><td>
                                        <![endif]-->
                                        <table cellpadding="0" cellspacing="0" width="100%" border="0" style="max-width: 660px; min-width: 660px; width: 660px;" class="em-narrow-table"><tr em="block" class="em-structure">
                          <td align="center" style="padding: 30px 40px 15px; background-color: #151414; background-repeat: repeat;" class="em-mob-padding_left-20 em-mob-padding_right-20" bgcolor="#151414">
                            <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                              <tr>
                                <td width="580" valign="top" class="em-mob-wrap em-mob-width-100perc" align="center"><table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td align="center" style="padding-bottom: 30px;">
                                                <img src="https://emcdn.ru/278815/241022_4213_UEXcGoT.png" width="158" border="0" alt="" style="display: block; width: 100%; max-width: 158px;">
                                            </td></tr></table>
                        
                        
                        
                        </td>
                              </tr></table>
                          </td>
                        </tr><tr em="block" class="em-structure">
                                                            <td align="center" style="padding: 30px 40px;" class="em-mob-padding_left-20 em-mob-padding_right-20">
                                                                <table align="center" border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                                                                    <tr>
                                                                        <td width="580" valign="top" class="em-mob-wrap em-mob-width-100perc">
                                                                            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td>
                          <img src="https://admin.webmarvels.ru/pdfs/${fileName}.png" width="660" border="0" alt="" style="display: block; width: 100%; max-width: 660px;">
                        </td></tr></table>
                                                                        </td>
                                                                    </tr></table>
                                                            </td>
                        </tr><tr em="block" class="em-structure"><td align="center" style="padding: 30px 40px; background-color: #151414;" bgcolor="#151414" class="em-mob-padding_left-20 em-mob-padding_right-20 em-mob-padding_bottom-20"><table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                                                        <tr>
                                                            <td width="580" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto">
                                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                                                                    <tr>
                                                                        <td align="center">
                                                                            <a href="#" target="_blank"><img src="https://emcdn.ru/278815/241022_4213_39atnrL.png" width="40" border="0" alt="" style="display: block; width: 100%; max-width: 40px;"></a>
                                                                        </td>
                                                                    </tr></table>
                                                            </td>
                                                        </tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td height="20"></td></tr></table><table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                                                        <tr>
                                                            <td width="180" valign="top" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto">
                                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                                                                    <tr>
                                                                        <td>
                                                                            <div style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px; color: #FFFFFF" align="right" class="em-font-Inter-Regular"><a href="" target="_blank" style="text-decoration: none; color: #ffffff;">ДЛЯ ЖЕНЩИН&nbsp;</a></div>
                                                                        </td>
                                                                    </tr></table>
                                                            </td>
                                                            <td width="20" class="em-mob-wrap em-mob-wrap-cancel"></td>
                                                            <td width="180" valign="top" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto">
                                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                                                                    <tr>
                                                                        <td>
                                                                            <div style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px; color: #FFFFFF" align="center" class="em-font-Inter-Regular"><a href="" target="_blank" style="text-decoration: none; color: #ffffff;">ДЛЯ МУЖЧИН</a></div>
                                                                        </td>
                                                                    </tr></table>
                                                            </td>
                                                            <td width="20" class="em-mob-wrap em-mob-wrap-cancel"></td>
                                                            <td width="180" valign="top" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto">
                                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                                                                    <tr>
                                                                        <td align="left">
                                                                            <div style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 18px; color: #FFFFFF" class="em-font-Inter-Regular">СКИДКИ</div>
                                                                        </td>
                                                                    </tr></table>
                                                            </td>
                                                        </tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td height="20"></td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td align="center">
                          <table border="0" cellspacing="0" cellpadding="0">
                            <tr><td width="40" align="center">
                                <a href="" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVnSURBVHgB3Zs9TCNHFMefNwalAMmRCwQUcRqULjZQ0HnpEgkJrgSapIEyRDTpwFWSAh1XQpPrKO8QNFexdBR8+EpozmmABskRLhI+7//fW6P1etce744/f5Lxrr1r5u/35s2bmeeYNAnTNBO3t7fm8/Pzt7FYLI3nNF5O4Djlvg6vF/BaAYdFHOcNwzgcGBjIW5ZVlCYQE41QZKlUWkHDszyVaFj4nPf9/f27R0dHBdGEFsGTk5O05JpEFxmEBS/IHR8fWxKRSIJbINQL3X8FwnclJKEET01Npe7v7/+W1gn18ravry8XxtW/kgaBVVceHx93cPi9tI/009PT3MjISPHq6upjIzcqC2ZASiaTf+KQLvy1tJ8EHnOjo6OJy8vLD6o3Kbm0E30PnKGl4+Bwhmj+SsXF6wp2+usBDlPS2RTQr6fria4puIvElikgvmTy+Xxg0mLUuvvh4eGddI9YkkKmdpBOpxNBFwQKnpiY2OzUPlsLprHxeHwt6H3fKD0+Pv4zbvxDupep4eHhfzFkHXnfqOrDXdhvgygiiGW8QazKpSGW7pCS7ifhZIMVVFgY/XYOT++kh0DXnHZPOrwWfi09hjO5eeFFMGc+0huu7MV0tNm8CPZ+E53A4OCgzM/Py9bWlsAtZW0tXBPd2uw+7ETmT9IhIJYwf5eZmRlbtBtYS8KADOwbZmBxntzd3c2ic0s7oTAKpFAK9gOzIgkLMrBf8ZSzBUPsnLSJWtb0gkRCwgKNplCwk3ea0kJUrOnHxcWFRMCkVqSdcS6hSitoxJp+RHFpAq3ZOJZKss3sv6rWPDk5ke3tbRkbG5PV1VXfayJaWKA1FefsQpqAqjWxWG8L3dnZEaxRyfr6es1ro2DPpOTL2pAWGu2btCoFMhhRLMdbzHJ8r6XYqBbmdDeOP6moLt1o33RbldCNNzY2AsWSKBHaRSLu3etRJWykdVuVUCwtW++LihqwCLXGJSRsJBuriteqhF8YA5SKV0R15zKhBdNSqoKxEyi5XK4i6DBHDorGfugSHIM7hh6EGWjoztls1nZtL3RDCuWX42Zpacl+NMLCwoIW0TGsX30K24/d0C0pnlZn8GHj9vf3q4aSMGJJ2EmDG+5F06W1bDxTGF2XjyDownTlRtHmzth4N/AnLy3Cz+1V0BGhHYoG92WkRdDCYcZTXRa2Sypg4X+kRbDhy8vLVUFM5T4dQLBlYCXAkhZC96RoZlaqubEul4bgj4az8WRJi2ECsri4aEfyemiysEWt9iIeTS1tgJZjmsmxOqhva3Tn93y2BWOe+EbayN7enu3mftY+Pz8XHUCjXQhjb6ZdX1//h6zJlDauS5fHcQY0JjHJZFJubm5s65dKJYmIdXZ2Zhv1ZV7olCAdSA8C65oQfMhj794SBZvSQzCdPD09/a58XrG3xGo36TFg3RX3eYVgZ5fNkh4B1n2Loaiiaq9qfxiJyC+iaULRTujKsG6Vx1aVPCBiFzG9+x/u/aN0MazJLAcqN741HqyNgGjWNk9JFwLrbiJQ/eX3XmAVD92hlTMpXbDNEPtb0PuBgpl3QvQ0+4J0CU6/fVXrmpqFad0k2hE7jTYXal1XUzDhBziiO9a92Ta0MVNPLGloywELfq8Z/aSDYIBivKlVX+mmoQJxRO8PiN5cIUlDuLY9qTBAKAX+jgCV4+RH9b6GK+IhOj80NLRLwc3aeVTAglV/wjirXBheJuqPPGbxjzd1rGsrQqHrfgmFKlp2wjOZTNYwjHVp4s94ogoto3XrP51Os1551imSMSUa/KEWhb5RDUgqNK3WgQUkEP4Dq2ecvp5w9qJT7uucMb7IDQFneOH5oU6Rbj4DqF7nh4fROxgAAAAASUVORK5CYII=" width="30" border="0" alt="" style="display: block;"></a>
                              </td><td width="40" align="center">
                                <a href="" target="_blank"><img src="data:image/png;base64,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" width="30" border="0" alt="" style="display: block;"></a>
                              </td></tr></table>
                        </td></tr></table><table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom"><tr><td height="30"></td></tr></table><table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                                                        <tr>
                                                            <td width="280" valign="top" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto">
                                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                                                                    <tr>
                                                                        <td>
                                                                            <div style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; line-height: 21px; color: #5a5a5a;" class="em-font-Inter-Regular"><a href="" target="_blank" style="color: #f833ac; text-decoration: none;">Отписаться&nbsp;</a></div>
                                                                        </td>
                                                                    </tr></table>
                                                            </td>
                                                            <td width="20" class="em-mob-wrap em-mob-wrap-cancel"></td>
                                                            <td width="280" valign="top" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto">
                                                                <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                                                                    <tr>
                                                                        <td>
                                                                            <div style="font-family: Helvetica, Arial, sans-serif; font-size: 16px; line-height: 21px; color: #5a5a5a;" class="em-font-Mulish-Regular" align="right"><span style="font-size: 14px; font-family: Helvetica, Arial, sans-serif;" class="em-font-Inter-Regular"><a href="" target="_blank" style="color: #f833ac; text-decoration: none;">Открыть веб-версию&nbsp;</a></span></div>
                                                                        </td>
                                                                    </tr></table>
                                                            </td>
                                                        </tr></table></td></tr></table>
                                        <!--[if (gte mso 9)|(IE)]>
                                        </td></tr></table>
                                        <![endif]-->
                                    </td>
                                </tr>
                            </table>
                        </body>
                        </html>`,
        })
        if (response) {
            res.status(200).send({message: 'Successfully created PDF'});
        }
    })
})


server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})