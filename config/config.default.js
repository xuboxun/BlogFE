/**
 * 默认配置文件
 */
export default {
    'devServer.host': 'localhost',
    'devServer.port': 8000,
    'devServer.proxy': {
        '/api': 'http://localhost:3000/api'
    },

    'app.title': 'blog',
    'app.logo': 'url',

};