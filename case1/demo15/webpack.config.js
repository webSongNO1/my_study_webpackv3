var path=require('path');
var htmlPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/entry.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"js/index.js"
    },
    module:require("./webpack_config/rules.js").entry,
    
     plugins:[
        require("./webpack_config/htmlPlgin.js")(htmlPlugin)
    ], 
    devServer:require("./webpack_config/server.js").server
}
