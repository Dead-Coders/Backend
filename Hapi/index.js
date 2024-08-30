const Hapi = require('@hapi/hapi');


const server = Hapi.server({
     port: 3000,
     host: 'localhost'
 });


const init = async () => {
     await server.register(require('inert'))
     await server.register(require('vision'))
     server.views({
          engines: {
              html:require('handlebars')},
              relativeTo: __dirname,
              path:'public'
     });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};
process.on("unhandledRejiction" ,(err) => {
     console.log(err)
     process.exit(1)
})

//* simple hom page route in hapi js

// server.route({
//      method: 'Get',
//      path:'/',
//      handler: (req, h) => {
//           return ("<h1>Hellow world</h1>")
//      }
// })

//*Multiple Route in hapi js
// server.route({
//      method: 'Get',
//      path:'/about',
//      handler: (req, h) => {
//           return ("<h1>About us</h1>")
//      }
// })

// server.route({
//      method: 'Get',
//      path:'/con',
//      handler: (req, h) => {
//           return ("<h1>Contact us</h1>")
//      }
// })

//* How are upload html file in Hapi js localserver using this command npm i inert

// server.route({
//      method:'Get',
//      path:'/',
//      handler: (req ,res) => {
//           return res.file("index.html")
          
//      }
// })

//*How are upload html file in Hapi js localserver using templeate engine handlebars and plugin vision

server.route({
     method:'Get',
     path:'/',
     handler: (req,h) => {
          return h.view("main",{name:"Abdullah", age:"15"})
     }
})

// init();

