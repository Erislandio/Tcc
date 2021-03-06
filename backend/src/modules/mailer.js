const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2c2bc1e5876b8a",
      pass: "98ddef61baa349"
    }
  });

transport.use('compile', hbs({
    viewEngine: "handlebars",
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'
}))

module.exports = transport
