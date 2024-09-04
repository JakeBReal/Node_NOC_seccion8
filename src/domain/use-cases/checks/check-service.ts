

interface CheckServiceUseCase{
    execute ( url : string ) : Promise<boolean>;
}

    type SuccessCallback = () => void;
    type ErrorCallback = ( error : string ) => void;


export class CheckService implements CheckServiceUseCase{

    constructor(
        private readonly SucessCallback:SuccessCallback,
        private readonly ErrorCallback: ErrorCallback
    ) {}


    public async execute ( url : string) : Promise<boolean> {

        try {
            const response = await fetch(url);
            if ( !response.ok ) {
                throw new Error(`ERROR on check service ${url}`);
            }

            this.SucessCallback();
            return true;
        } catch (error){
            console.log(`${error}`);

            this.ErrorCallback(`${error}`);
            return false;
        }

        
        }
    }

