const nodemailer = require('nodemailer');

const emailRegister = async (datos) =>{
    const { email, name, token } = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
      });

      const info = await transport.sendMail({
        //from: `"Morada - Welcome" <${process.env.EMAIL_USER}>`,
        from: `"Morada - Welcome" <'info@morada.com'>`,
        to: email,
        subject: "Confirm your account",
        text: "Comprueba tu cuenta en Morada",
        html: ` <p> Hola: ${name} Comprueba tu cuenta en Morada</p>
                <p>Tu cuenta ya esta casi lista, solo debes comprobarala en el siguiente enlace: </p>
                <a href="${process.env.URL_API}/ConfirmAccount/${token}">Comprobar cuenta</a>
                <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
        `
      });
      

};

const emailForgetPassword = async (datos) =>{
  const { email, name, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const info = await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Recovery Password",
      text: "Recovery Password en Morada",
      html: ` <p> Hola: ${name}</p>
              <p> Recovery Password en Morada</p>
              <p>Solo debes ingresar al siguiente enlace para recuperar tu "password": 
              <a href="${process.env.URL_API}/ForgetPassword/${token}">Recovery Password</a></p>
              <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      `
    });

};

module.exports = {
  
  emailRegister, 
  emailForgetPassword
};