const path = require('path')

export default {
    extraBabelPlugins: [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ],
    alias: {
        '@': path.resolve(__dirname, 'src/')
    },
    
    proxy: {
        '/api': {
            secure: false,
            target: 'http://127.0.0.1:3000',
            changeOrigin: true
        }
    }
}
