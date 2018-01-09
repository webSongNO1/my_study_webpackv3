
module.exports=function(htmlPlugin){
 return  new htmlPlugin({
        minify:{
            removeAttributeQuotes:true //把标签里的引号去掉了
        },
        hash:true,//清理缓存
        template:'./src/index.html',
        //filename:'./dist/index.html'
    })
}