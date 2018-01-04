var path=require('path');
module.exports={
    entry:{
        bundle:'./src/entry.js',
        bundle2:"./src/entry2.js"
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].js"
    },
    module:{},
    plugins:[],
    devServer:{}
}