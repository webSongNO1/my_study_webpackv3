var path=require('path');
module.exports={
    entry:{
        a:"./src/1.js",
        b:"./src/2.js",
        c:"./src/3.js"
    },
    output:{
        path:path.resolve(__dirname,'dist/js'),
        filename:"[name].js"
    },
    module:{
        rules:[ //rules:规则
            {
                test:/\.css$/,//正则找到css
                use:['style-loader','css-loader'],//loader
            }
        ]
    }
}