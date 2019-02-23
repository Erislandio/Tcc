const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')

const mailerConfig = require('../config/mailer.json')

const transport = nodemailer.createTransport({
    mailerConfig
});

transport.use('compile', hbs({
    viewEngine: "handlebars",
    viewPath: path.resolve('../resources/mail/'),
    extName: '.html'
}))

module.exports = transport
