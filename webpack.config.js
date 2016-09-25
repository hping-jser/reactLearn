// var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {                            // 入口文件 可以是多个
        test: './app/test.js',
        test2: './app/test2.js'
        // entry2: './app/entry2.js'
    },
    output: {                           // 打包后输出
        path: './build',                // 打包输出文件夹
        // filename: '[name].js'           // 文件名  [name] 对应entry下的key值
        filename: 'build.js'           // 文件名  [name] 对应entry下的key值
    },
    resolve: {                          // 定义解析模块路径时的配置
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel',query: {
                presets: ['react', 'es2015']
            }
        }
        ]
    }
    // plugins: [commonsPlugin]
};