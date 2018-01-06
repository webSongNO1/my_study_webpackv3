const path=require("path");
const glob =require("glob");//nodejs模块，用来全局读取文件内容。
const htmlPlugin=require("html-webpack-plugin");
const extractTextPlugin=require("extract-text-webpack-plugin");
const purifyCssPulgin=require("purifycss-webpack");//清除冗余css插件
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/index.js"
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:extractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {loader:"css-loader",options:{importLoaders:1}},                    
                    ]
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
        new extractTextPlugin("css/index.css"),
        new purifyCssPulgin({
            paths:glob.sync(path.join(__dirname,"src/*.html"))//搜索src目录下的所有html，筛选没有用的css，之类必须配合css打包分离插件才可以使用            
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        compress:true,
        port:4399
    }
}