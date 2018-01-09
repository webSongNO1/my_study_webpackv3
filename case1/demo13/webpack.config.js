const path=require("path");
const htmlPlugin=require("html-webpack-plugin");
module.exports={
    devtool:'eval-source-map',//四种调试模式：source-map 独立文件 map 慢 行 列；cheap-moudle-source-map 独立文件 不包括列 稍快；eval-source-map eval到js里 快 不安全 一定是在开发阶段使用；cheap-moudle-eval-source-map 列 适合小项目
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/index.js"
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:[
                    "style-loader","css-loader"
                ]
            }
        ]
    },
    plugins:[
        new htmlPlugin({
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