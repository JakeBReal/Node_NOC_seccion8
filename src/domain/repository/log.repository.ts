

import { LogEntity,LogServerityLevel } from "../entities/log.entity";
import { LogRepositoryImpl } from '../../infrastructure/datasources/repositories/log-repository.impl';



export abstract class LogRepository{
  abstract saveLog ( log: LogEntity) : Promise<void>;
  abstract getLogs ( securityLevel: LogServerityLevel) : Promise<LogEntity[]>;
}

