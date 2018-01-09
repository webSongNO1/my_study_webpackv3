const path=require('path');
const webpack=require('webpack');

module.exports={
    entry:"./app/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"index.js",
        publicPath:'temp/'
    },
    devServer:{
        contentBase:'./',
        host:"localhost",
        compress:true,
        port:4399        
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        query:{
                            presets:["env","react"]
                        }
                    }
                ],
                exclude:/node_modules/
            }
        ]
    }
}