var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src', // scr文件路径
    // entry: './js/index.js', // 总入口js
    entry: path.join(__dirname, 'src', 'js', 'index.js'), // 将路径拼接起来
    module: { // 模块加载
        loaders: [{
            test: /\.js?$/, //正则校验js文件后缀
            exclude: /(node_modules)/, // 跳过node模块管理包加载
            loader: 'babel-loader', // 加载语法编译
            query: {
                presets: ['react','es2015'] // 查询预加载模块
            }
        }]
    },
    output: {
        path: __dirname + '/src/', // 打包后输入到src路径下
        filename: 'bundle.js' // 创建一个新的js文件，讲所有模块编译到这个js文件
    }
};