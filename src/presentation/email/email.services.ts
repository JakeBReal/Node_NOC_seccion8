
import { envs } from '../../config/plugins/envs.plugi';
import { Options } from '../../domain/use-cases/save-file.use-case';
import nodemailer from 'nodemailer';


interface SendMailOptions{
    to: string;
    subject: string;
    htmlbody: string;
    // TODO : ATTACHMENT :  
}

// todo attachment
export class EmailService {
    
    private transporter  = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
    
        }
    });

    async sendEmail(options:SendMailOptions): Promise<boolean> {

        const { to, subject, htmlbody } = options;
        try {
            const sentInformation = await this.transporter.sendMail({

                
                to: to,
                subject: subject,
                html: htmlbody
            })

           
            console.log(sentInformation);
            return true;
        } catch (error) {

            return false;
        }
    }
}