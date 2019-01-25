const nodemailer  = require('nodemailer')

const sendEmail = (SMS, name, deliveryDate, deliveryHours) => {
    console.log(deliveryDate, deliveryHours)
    const smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "matinegus@gmail.com",
            pass: "Martine123"
        }
    });
    
    
    const mail = {
        from: "matinegus@gmail.com",
        to: SMS,
        subject: "demande d'essayage avec Gustave",
        html: `Bonjour Monsieur ${name}, nous vous confirmons votre essayage le ${deliveryDate} à ${deliveryHours} heures`
    }
    
    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log("Erreur lors de l'envoie du mail!");
            console.log(error);
        }else{
            console.log("Mail envoyé avec succès!")
        }
        smtpTransport.close();
    });
}



module.exports = sendEmail