const path=require('path');
const uglify=require('uglifyjs-webpack-plugin');
module.exports={
    entry:{
        a:"./src/index.js",
        b:"./src/index2.js"
    },
    output:{
        path:path.resolve(__dirname,'dist/js'),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:"css-loader"}
                ]
            }
        ]
    },
    plugins:[
        new uglify()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:4399
    }
}