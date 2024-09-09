
import { envs } from '../../config/plugins/envs.plugi';
import { LogRepository } from '../../domain/repository/log.repository';
import { Options } from '../../domain/use-cases/save-file.use-case';
import nodemailer from 'nodemailer';
import { LogEntity, LogServerityLevel } from '../../domain/entities/log.entity';


interface SendMailOptions{
    // *string | string[] = SIGNIFICA QUE PUEDE SER UN STING O STRING COMO UN ARREGLO
    to: string | string[];
    subject: string;
    htmlbody: string;
   // TODO : ATTACHMENT :  
    attachments: Attachment[];
}

    // todo attachment
    interface Attachment{
        filename: string;
        path: string; 
        
    }
export class EmailService {
    
    private transporter  = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    // * INYECCION DE REPOSITORIO
    constructor(
        // private readonly logRepository: LogRepository,
        // // private readonly successCallback: SuccessCallback,
        // // private readonly errorCallback: ErrorCallback

        // TODO: ADICIONAR OTROS PARAMETROS EN EL CONSTRUCTOR SI SE NECESITA
    ){}

    async sendEmail(options:SendMailOptions): Promise<boolean> {


        //  *ATTACHMENTS [] = SIGNIFICA QUE P[UEDO RECIBIR UNARREGLO VACIO O NO ]
        const { to, subject, htmlbody, attachments = [] } = options;
        try {
            const sentInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlbody,
                attachments : attachments,
            })          
          
            // this.logRepository.saveLog(log);

            return true;
        } catch (error) {

            return false;
        }
    }

    // METODO NUEVO
    async sendEmailWithFileSystemLogs( to: string | string[]) {
        const subject = 'LOgs del servidor';
        const htmlbody = `
        <h1>Archivos de Logs</h1>
        <p> Lorem ipsum dolor sit amet consectetur ad
    ipisicing elit. Dolor saepe delectus quia v
    tae amet maxime cum temporibus
     natus, ad dignissimos, suscipit optio e
     os sapiente ea iste dolore. Repellat,
      fuga dolores.
        </p>
        <p>Para ver el detalle de los logs,
         visite el siguiente enlace: </p>
        `;

        const attachments : Attachment[]= [
            { filename: 'logs-all.log' , path: './logs/logs-all.log'},
            { filename: 'logs-high.log' , path: './logs/logs-high.log'},
            { filename: 'logs-medium.log' , path: './logs/logs-medium.log'}
            ];

            // !USAR NUESTRO PROPIO METODO
         return this.sendEmail({
             to, subject, attachments ,htmlbody
            });

        }

    }