
export enum LogServerityLevel{
    low = 'low',
    medium= 'medium',
    high = 'high',
}


export interface LogEntityoptions {
    level: LogServerityLevel; //ENUM
         message: string;
        createAT?: Date;
         origin : string;

}
export class LogEntity {

        public level: LogServerityLevel; //ENUM
        public message: string;
        public createAT: Date;
        public origin : string;

        constructor( options: LogEntityoptions ){
            const {message,level,origin, createAT = new Date()} = options;
            this.message = message;
            this.level = level;
            this.createAT = new Date();
            this.origin = origin;
        }


        // METODO ESTATICOS 
        // {"level":"high", "message":"Hola Mundo", "createdAT":"1238937TZ17270"}

        static fromJson = (json: string) : LogEntity =>{
            
           const {message, level, createdAT,origin} = JSON.parse(json);

           const log = new LogEntity({
             message: message,
             level: level,
             createAT: createdAT,
             origin: origin,
           });

           return log;
        }
    }