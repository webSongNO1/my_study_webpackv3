var path=require('path');
module.exports={
    server:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        compress:true,
        port:4399
    }
}