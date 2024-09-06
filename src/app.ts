<<<<<<< HEAD


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

=======
import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


(async () => {
  await main();
})();


async function main() {

  const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg;


  ServerApp.run({ base, limit, showTable, fileName, fileDestination });

}
>>>>>>> fbce000670d07a617dbb40c5007bd853f7e29cd6
