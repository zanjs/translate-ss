const { translate } = require('translation.js');
const { isUrl, isLangJP, trim } = require('../util/index');

const translateText = async(ctx, next) => {
  console.log("-----api-------")
  console.log(ctx.request.body)

  let text = ctx.request.body.text || ctx.query.t || 'hello world'
  let from = ctx.request.body.from || 'auto'
  let to = ctx.request.body.to || 'zh-CN'

  text = trim(text)

  if (isLangJP(text)) {
    from = 'ja'
  }

  console.log(from)

  let val = await translate({ to: to, from: from ,text: text})

  ctx.body = val
}

module.exports = {
  translateText
}