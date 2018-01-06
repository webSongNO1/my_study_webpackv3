const path=require("path");
const htmlPlugin=require("html-webpack-plugin");
const extractTextPlugin=require("extract-text-webpack-plugin");
var web={
    publicPath:"http://localhost:8080/dist/"
}
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/index.js",
        publicPath:web.publicPath
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: extractTextPlugin.extract({ //分离处理css
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader"]
                })
            },
            {
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
                        {loader:"less-loader"},
                        {loader:"postcss-loader"}
                    ],
                    fallback:"style-loader"
                })
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            hash:true,//清理缓存
            template:"./src/index.html",
           // filename:path.resolve(__dirname,'dist/index.html')
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