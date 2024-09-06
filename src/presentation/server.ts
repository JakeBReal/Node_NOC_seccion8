import { CheckService } from "../domain/use-cases/checks/check-service";
import { cronservices } from "./cron/cron-service";

// import { ChildProcess } from "child_process";
import { LogRepositoryImpl } from '../infrastructure/datasources/repositories/log-repository.impl';
import { FileSystemDataSources } from "../infrastructure/datasources/file-system.datasources";

const FilelogRepository =new LogRepositoryImpl(
    new FileSystemDataSources(),
    // new postgresLogDataSources();
    // new MongoLogDataSources();
);


export class Server {
    
    public static start() {

        console.log('Server started...');

        cronservices.createjob( 
            '*/5 * * * * * ',
            () => {

                const url = 'http://google.com';
                new CheckService(
                    FilelogRepository,
                    () => console.log(`${url} is OK`)
                    ,
                    (error) => console.log(`Error checking ${url}: ${error}`)
                ).execute(url);
                // new CheckService().execute('http://localhost:3000')

            //     const date = new Date();

            //    console.log('everry 5 seconds', date);
            // OnTick function to be executed every 5 minutes
             }  
        );
        
        
    }
}

