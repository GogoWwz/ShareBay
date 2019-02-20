import dva from 'dva';
import createLoading from 'dva-loading'
import './index.less';

// import './tstest/1.变量类型'
import './tstest/2.函数'
// import './tstest/接口'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
require('./models').default.forEach(key => app.model(key.default))
// app.model(require('./models/example').default);

// loading
app.use(createLoading())

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
