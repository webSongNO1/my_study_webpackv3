var path=require('path');
var copyWebPackPlugin=require('copy-webpack-plugin');
module.exports={
    entry:"./src/entry.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/index.js"
    },
    plugins:[
        new copyWebPackPlugin([{
            from:__dirname+'/src',
            to:'./public'
        }])
    ]
}