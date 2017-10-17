const Router = require('koa-router');
const { translateText } = require('./controllers/translate');

const router = Router({
  prefix: '/api/translate'
});

router.post('/text', translateText);
router.get('/text', translateText);

module.exports = router;