const client = require("@sendgrid/mail")

function sendEmail(client, message, senderEmail, senderName) {
  return new Promise((fulfill, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName
      },
      subject: 'Whitehare daycare - Web mail',
      to: 'enda.grimes@hotmail.co.uk',
      html: `<b>Hey, you\'ve recieved a messages via your website.</b><br/>Message: ${message}`
    }

    client
      .send(data)
      .then(([response, body]) => {
        fulfill(response)
      })
      .catch(error => reject(error))
  })
}

exports.handler = function(event, context, callback) {
  const {
    SENDGRID_API_KEY
  } = process.env

  const body = JSON.parse(event.body)
  const message = body.message
  const senderEmail = body.senderEmail
  const senderName = body.senderName

  client.setApiKey(SENDGRID_API_KEY)

  sendEmail(
    client,
    message,
    senderEmail,
    senderName
  )
  .then(response => callback(null, { statusCode: response.statusCode }))
  .catch(err => callback(err, null))
}