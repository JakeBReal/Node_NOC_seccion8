

import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTICK = () => void;

export class cronservices  {

    static createjob( cronTime: CronTime, OnTick: OnTICK):CronJob{

        const job = new CronJob( cronTime, OnTick );
        job.start();
        return job;
        
    }
}