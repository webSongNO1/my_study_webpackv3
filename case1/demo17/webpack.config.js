var path=require("path"),webpack=require('webpack'),htmlPlugin=require("html-webpack-plugin");

module.exports={
    entry:'./src/entry.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/index.js"
    },
    plugins:[
        new htmlPlugin({
            template:'./src/index.html'
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