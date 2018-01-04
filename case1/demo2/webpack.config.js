var path=require('path');
module.exports={
    entry:{
        base:"./src/1.js",
        home:"./src/2.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js"    
    },
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),//监听目录
        host:"192.168.1.103",//服务ip 可以用ipconfig查看ip
        compress:true,//服务器压缩
        port:4399
    }
}