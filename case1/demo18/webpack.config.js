var path=require('path');
var webpack=require('webpack');
var htmlPlugin=require("html-webpack-plugin");
var uglifyjs=require("uglifyjs-webpack-plugin");
module.exports={
    entry:{
        entry:'./src/entry.js',
        jquery:'jquery',
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/index.js"
    },
    module:{
        
    },
    plugins:[
        new uglifyjs(),
        new htmlPlugin({
            template:'./src/index.html'
        }),
        new webpack.ProvidePlugin({
            $:"jquery",    
        }),
        new webpack.optimize.CommonsChunkPlugin({
            //name对应入口文件中的名字，我们起的是jQuery
            name:['jquery'],
            //把文件打包到哪里，是一个路径
            filename:"js/[name].js",
            //最小打包的文件模块数，这里直接写2就好
            minChunks:2
        }),
        new webpack.BannerPlugin('本demo由websong书写') //添加版权和备注
    ],
    watchOptions:{
        //检测修改的时间，以毫秒为单位
        poll:1000, 
        //防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
        aggregateTimeout:500, 
        //不监听的目录
        ignored:/node_modules/, 
    } 
}