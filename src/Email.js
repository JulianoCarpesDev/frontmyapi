import nodemailer from "nodemailer";

const sendEmail = async (detinario,cliente,arquivo) => {
  // Cria uma mensagem de e-mail
  const mail = {
    from: "juliano.carpes@gmail.com",
    to: detinario,
    subject: "Orcamento",
    text: "Ola segue Orcamento conforme solicitado", // Use 'text' em vez de 'body' para o conteúdo do e-mail
    attachments: [
        {
          //filename:cliente, // Nome do arquivo no e-mail
          content: arquivo, // Dados do PDF em base64
        },
      ],
    };


  // Envia o e-mail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'juliano.carpes@gmail.com',
      pass: 'rafaellucas01',
      
    },
  });

  try {
    const response = await transporter.sendMail(mail);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export default sendEmail; // Exporta a função como valor padrão do módulo
