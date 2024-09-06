

import { envs } from './config/plugins/envs.plugi';
import { Server } from "./presentation/server";

// AASI SE DECLARA UNA UNCION ANONIMA


// (() =>{

// });



(async() =>{
    main();
})();

function main() {
    Server.start();

    console.log( envs);
    // console.log(process.env.port);
    // console.log(process.env.MAILER_EMAIL);
    // console.log(process.env.MAILER_SECRET_KEY);

}

