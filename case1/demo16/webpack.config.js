const path=require("path"),webpack=require("webpack"),htmlPlugin=require("html-webpack-plugin"),uglifyjs=require('uglifyjs-webpack-plugin');
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/index.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
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
        new uglifyjs()
    ],
    devServer:{
        port:8080
    }
}