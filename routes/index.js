var router = require('koa-router')();
const log4 = require('../log4j');

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };
  throw new Error('测试log');
  await ctx.render('index', {
  });
})
module.exports = router;
