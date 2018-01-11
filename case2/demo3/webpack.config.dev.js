const path=require('path');
const htmlPlugin=require("html-webpack-plugin");
const webpack=require("webpack");
const extractTextPlugin=require("extract-text-webpack-plugin");
var website={
    publicPath:"http://localhost:8080/"
}
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/index.js",
        publicPath:website.publicPath//公用路径，处理图片的
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: extractTextPlugin.extract({ //分离处理css
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(png|gif|jpg)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:5000, //如果大于5000kb就拷贝过去，如果小于，就以base64生成                        
                        outputPath:"img/"
                    }
                }]
            },
            {
                test:/\.(html|htm)$/,
                loader:"html-withimg-loader"
            }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new htmlPlugin({
            template:'./src/index.html'
        }),
        new extractTextPlugin("css/index.css") //打包出来
    ],
  /*   devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        historyApiFallback:true,
        inline:true,
        open:true,
        host:'localhost',
        port:8080
    }, */
    watchOptions:{
        //检测修改的时间，以毫秒为单位
        poll:1000, 
        //防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
        aggregateTimeout:500, 
        //不监听的目录
        ignored:/node_modules/, 
    } 
}