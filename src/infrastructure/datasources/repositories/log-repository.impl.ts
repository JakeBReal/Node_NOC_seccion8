import { LogDataSource } from "../../../domain/datasources/log.datasource";
import { LogEntity, LogServerityLevel } from "../../../domain/entities/log.entity";
import { LogRepository } from "../../../domain/repository/log.repository";



export class LogRepositoryImpl implements LogRepository{


    // private LogDatasource: LogDataSource ;
    constructor (
        private readonly LogDataSource : LogDataSource,
    )
    
    {}


    async saveLog(log: LogEntity): Promise<void> {
        return this.LogDataSource.saveLog (log);   
    }

   async getLogs(securityLevel: LogServerityLevel): Promise<LogEntity[]> {
        return this.LogDataSource.getLogs (securityLevel);
    }

}