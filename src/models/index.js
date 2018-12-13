// 用于导出所有的 model
const context = require.context('./', false, /\.js$/)

export default context.keys().filter(item => item !== './index.js').map(key => context(key))