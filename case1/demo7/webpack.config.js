const path=require("path");
const webpack=require('webpack');
const htmlPlugin=require("html-webpack-plugin");
const extractTextPlugin=require("extract-text-webpack-plugin");
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/index.js"
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
        new extractTextPlugin("./css/index.css") //打包出来
    ],
    devServer:{

    }
}