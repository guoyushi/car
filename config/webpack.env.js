let webpack = require('webpack');
//let baseConfig = require('./webpack.base');
let DefinePlugin = webpack.DefinePlugin;
const path = require('path');
let dir = process.cwd();//获取当前程序运行的目录
// baseConfig.plugins.push(new DefinePlugin({
//     "process.env":'"development"'
// }))
module.exports = {
    entry:{//入口文件
        "bundle":dir + '/src/main'
    },
    output:{//出口
        "filename":'[name].js',
        "path":dir + '/dist'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:path.resolve(__dirname, 'node_modules/')
            },
            {
                test:/\.less$/,
                use:['style-loader',"css-loader","less-loader"],
                exclude:path.resolve(__dirname, 'node_modules/')
            },
            {
                test:/\.css$/,
                use:['style-loader',"css-loader"],
                exclude:path.resolve(__dirname, 'node_modules/')
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:['url-loader']
            },
            {
                test:/.(eot|svg|ttf|woff)$/,
                use:['url-loader']
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    plugins:[],
    devServer:{
        historyApiFallback:true,
        open:true,
        port:8080,
        inline:true,
        noInfo:true,
        // proxyTable:{//接口代理
        //     "/api":"http://localhost:9000/"
        // }
    },
    devtool:'eval-source-map'
}