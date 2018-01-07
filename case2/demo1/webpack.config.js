const path=require("path"); //node路径模块
const glob=require("glob"); //node全局模块
const webpack=require("webpack");//本地webpack，用来使用自带插件
const htmlPlugin=require("html-webpack-plugin");//打包html
const uglifyjs=require("uglifyjs-webpack-plugin");//压缩js
const extractTextPlugin=require("extract-text-webpack-plugin");//分离css
const purifyCssPulgin=require("purifycss-webpack");//清除冗余css插件
var website={
    publicPath:"http://localhost:4399/" //全局公共路径，用来处理分离css中的图片
}

module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/index.js",
        publicPath:website.publicPath
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:extractTextPlugin.extract({ //打包分离css
                    fallback:'style-loader',
                    use:[
                        {loader:"css-loader",options:{importLoaders:1}}, 
                        {loader:"postcss-loader"}            //加css前缀
                    ]
                })
            },{
                test:/\.less$/,
                /* use:[{ //这就是单纯打包
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                },{
                    loader:"less-loader"
                }, {loader:"postcss-loader"}                
                ] */
                //这是分离出来的less
                use:extractTextPlugin.extract({
                    use:[
                        {loader:"css-loader"},
                        {loader:"less-loader"},
                        {loader:"postcss-loader"} //加css前缀
                    ],
                    fallback:"style-loader"
                })
            },{
                test:/\.(htm|html)$/,
                use:["html-withimg-loader"] //打包html里的图片
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:5000, //如果大于5000kb就拷贝过去，如果小于，就以base64生成                        
                        outputPath:"img/" //打包css中图片
                    }
                }]
            }
        ]
    },
    plugins:[
        /*  new uglify() //js压缩，不过在开发环境不可以用哦，打包时用就行了 */
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true //打包html
            },
            hash:true,
            template:"./src/index.html"
        }),
        new extractTextPlugin("css/index.css"),//分离css
        new purifyCssPulgin({
            paths:glob.sync(path.join(__dirname,"src/*.html"))//搜索src目录下的所有html，清除冗余css，之类必须配合css打包分离插件才可以使用            
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        compress:true,
        port:4399
    }
}