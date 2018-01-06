const path=require("path");
const webpack=require('webpack');
const htmlPlugin=require("html-webpack-plugin");
const extractTextPlugin=require("extract-text-webpack-plugin");


var website={
    publicPath:"http://localhost:8080/"
}
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,"dist"),
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
            },{
                test:/\.(png|jpg|gif)/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:5000, //如果大于5000kb就拷贝过去，如果小于，就以base64生成                        
                            outputPath:"img/"
                        }
                    }
                ]
            },{
                test:/\.(htm|html)$/, //处理html里的图片
                use:["html-withimg-loader"]
            },{
                test:/\.less$/,
                /* use:[{ //这就是单纯打包
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                },{
                    loader:"less-loader"
                }] */
                //这是分离出来
                use:extractTextPlugin.extract({
                    use:[
                        {loader:"css-loader"},
                        {loader:"less-loader"}
                    ],
                    fallback:"style-loader"
                })
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html"
        }),
        new extractTextPlugin("css/index.css") //打包出来
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8080
    }
}