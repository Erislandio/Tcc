const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

const mailerConfig = require('../config/mailer.json')

const transport = nodemailer.createTransport({
    mailerConfig
});

transport.use('compile', hbs({
    viewEngine: "handlebars",
    viewPath: ""
}))

module.exports = transport
