
export enum LogServerityLevel{
    low = 'low',
    medium= 'medium',
    high = 'high',
}
export class LogEntity {

        public level: LogServerityLevel; //ENUM
        public message: string;
        public createAT: Date;

        constructor( message: string,  level: LogServerityLevel){
            this.level = level;
            this.message = message;
            this.createAT = new Date();
        }


        // METODO ESTATICOS 
        // {"level":"high", "message":"Hola Mundo", "createdAT":"1238937TZ17270"}

        static fromJson = (json: string) : LogEntity =>{
            
           const {message, level, createdAT} = JSON.parse(json);

           const log = new LogEntity(message, level);

           log.createAT = new Date(createdAT);
           return log;
        }
    }