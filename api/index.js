//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   require('dotenv').config() // permite usar las variables de entorno
   server = require('./src/app.js');
   const {appConfig} = require('./config')


// const { conn } = require('./src/db.js');

// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
  server.listen(appConfig.port, () => {
    console.log(`Server listen on port:  ${appConfig.port}`); // eslint-disable-line no-console
  });
// });
