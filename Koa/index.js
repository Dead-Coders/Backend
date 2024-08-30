// const Koa = require('koa');
// const logger = require('koa-logger');
// const router = require('@koa/router');
// const app = new Koa();
// const render = require('koa-ejs');

// // middlewares
// app.use(logger());

// const helloWorld = (ctx) => {
//   ctx.body = 'mgs';
// };

// render(app, {
//   root:path.join(__dirname, 'views'),

// })

// router.get('/', helloWorld);
// router.get('/about', (ctx) => {
//   ctx.body('hellow');
// });

// app.use(router.routes());

// app.listen(3000);
const Koa = require('koa');
const Pug = require('koa-pug');

const app = new Koa();

// Initialize Pug middleware
const pug = new Pug({
  viewPath: './views',
  basedir: './views',
  app: app, // Pass the Koa instance
});

// Example route
app.use(async (ctx) => {
  await ctx.render('index', { message: 'Koa.js with Pug' }); // Render the 'index' template
});

app.listen(3000);
