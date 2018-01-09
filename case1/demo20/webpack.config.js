var path=require('path');
var webpack=require('webpack');
var htmlPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/entry.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/index.js"
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlPlugin({
            template:'./src/index.html'
        })
    ]
}