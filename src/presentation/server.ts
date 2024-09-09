import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

// import { ChildProcess } from "child_process";
import { LogRepositoryImpl } from '../infrastructure/datasources/repositories/log-repository.impl';
import { FileSystemDataSources } from "../infrastructure/datasources/file-system.datasources";
import { envs } from "../config/plugins/envs.plugi";
import {  EmailService } from './email/email.services';

const FileSystemlogRepository =new LogRepositoryImpl(
    new FileSystemDataSources(),
    // new postgresLogDataSources();
    // new MongoLogDataSources();
);


export class Server {
    
    public static start() {

        console.log('Server started...');

        // MANDAR EMAIL
        const emailService = new EmailService ();

        emailService.sendEmail({ 
            to: 'jakebencosme@gmail.com',
            subject: 'Logs de sistema',
            htmlbody: `
            
            <h2>Logs de sistema</h2>
            <p>Aquí tienes los logs de sistema:</p>
            <p> Ver logs adjuntos </p>
            `
        });

        // console.log( envs.MAILER_EMAIL, envs.MAILER_SECRET_KEY );
        
        

        //   CronService.createJob( 
        //     '*/5 * * * * * ',
        //     () => {

        //         const url = 'http://google.com';
        //         new CheckService(
        //           FileSystemlogRepository,
        //             () => console.log(`${url} is OK`)
        //             ,
        //             (error) => console.log(error)
        //         ).execute(url);
                //    );


                // new CheckService().execute('http://localhost:3000')

            //     const date = new Date();

            //    console.log('everry 5 seconds', date);
            // OnTick function to be executed every 5 minutes
             }  
       
        
        
    }


