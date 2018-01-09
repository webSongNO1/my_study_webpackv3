const path=require("path");
const htmlPlugin=require("html-webpack-plugin");
const webpack = require('webpack');
var website;
console.log(process.env.type)
if(process.env.type=='build'){//node接受到这个值，根据不同命令打包不同环境
//生成环境
 website={
    pblicPtha:"http://192.168.1.28:4399/dist/"
}
}else if(process.env.type=='dev'){
    //开发环境
     website={
        pblicPtha:"http://localhost:4399/dist/"
    }
}else{
    //默认开发环境，给热更新用的，不然会错。妈蛋的。
     website={
        pblicPtha:"http://localhost:4399/dist/"
    }
}

module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/index.js",
        publicPath:website.publicPath
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins:[
        new htmlPlugin({
            hash:true,
            template:'./src/index.html'
        }),
        new webpack.ProvidePlugin({
            $:"jquery"
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        compress:true,
        port:4399
    }
}