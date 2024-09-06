
import  fs from 'fs';

import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogServerityLevel } from "../../domain/entities/log.entity";




export class FileSystemDataSources implements LogDataSource{

    private readonly logPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-all.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly HightLogsPath = 'logs/logs-high.log';


    constructor() {
       this.createLogsFiles(); 
    }


    // METODO
    private createLogsFiles = () => {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath);
        }

        
            [
                this.allLogsPath,
                this.mediumLogsPath,
                this.HightLogsPath,

            ].forEach ( path => {
                            
                if (!fs.existsSync(path)) return 

                fs.writeFileSync(path, '');
            });

        
    }
    async saveLog (newLog: LogEntity): Promise<void> {
        

        const logASJson = `${ JSON.stringify(newLog) }\n`;

        fs.appendFileSync( this.allLogsPath, logASJson);

        if ( newLog.level === LogServerityLevel.low) return; 

        if (newLog.level === LogServerityLevel.medium) {
            fs.appendFileSync(this.mediumLogsPath, logASJson);
        } else {
            fs.appendFileSync(this.HightLogsPath, logASJson);
        }
    }


    // metodo ptivado
    private getLogsFromFile = (path: string): LogEntity[]=>{
        const content    = fs.readFileSync(path, 'utf-8');
        const logs = content.split('\n').map(
            LogEntity.fromJson);
        
        return logs;
    }
    
    
    async getLogs(severityLevel: LogServerityLevel): Promise<LogEntity[]> {

        switch (severityLevel) {
            case LogServerityLevel.low:
                return this.getLogsFromFile(this.allLogsPath);

            case LogServerityLevel.medium:
                return this.getLogsFromFile(this.mediumLogsPath);
                
            case LogServerityLevel.high:
                return this.getLogsFromFile(this.HightLogsPath);
            default:
                throw new Error(`Unknown severity level ${severityLevel}`);
        }
    }

}