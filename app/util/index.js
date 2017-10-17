const URLREGEXP = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/

const isUrl = text => URLREGEXP.test(text);

// 是否有日文
const isLangJP = text => {
  return /.*[\u0800-\u4e00]+.*$/.test(text.replace(/[\r\n]/g, ""))
}

// 去左右控股
const trim = text => {
  return text.replace(/(^\s*)|(\s*$)/g, '')
}

module.exports = {
  URLREGEXP,
  isUrl,
  isLangJP,
  trim,
}