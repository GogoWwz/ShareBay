import dva from 'dva';
import createLoading from 'dva-loading'
import './index.less';

// import './tstest/变量类型'
// import './tstest/函数'
// import './tstest/接口'
// import './tstest/声明文件'
// import './tstest/类型别名'  
// import './tstest/字符串字面常量'  
// import './tstest/类'  
// import './tstest/类与接口'
import './tstest/泛型'

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
