var path=require("path");
var htmlPlugin=require("html-webpack-plugin");

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
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:"url-loader",
        
                    options:{
                        limit:5000, //如果大于5000kb就拷贝过去，如果小于，就以base64生成                        
                        outputPath:"img/"
                    }
                    
                }]
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            minify:{
                //removeAttributeQuotes:true
            },
            hash:true,
            template:"./src/index.html",
            filename:path.resolve(__dirname,'dist/index.html')
        })
    ]
}