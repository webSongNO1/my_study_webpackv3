const path=require("path");
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,'dist/js'),
        filename:"index.js"
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    },
    plugins:[
        new  htmlPlugin({
            minify:{
                removeAttributeQuotes:true //把标签里的引号去掉了
            },
            hash:true,//清理缓存
            template:"./src/index.html",
            filename:path.resolve(__dirname,'dist/index.html')
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        compress:true,
        port:4399
    }
}