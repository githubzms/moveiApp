module.exports = {
       devServer: {
           proxy: {
               '/api': {
                   target: 'http://39.97.33.178', //API服务器的地址
                   ws: true,  //代理websockets
                   changeOrigin: true, // 虚拟的站点需要更管origin b
               }
           },
       }
}
