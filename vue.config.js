module.exports = {
    lintOnSave: false, // 关闭语法检测
    // 开启代理服务器
    devServer: {
        // 代理服务器可以将路由中的指定前缀转发到指定的后端服务器中
        proxy: {
            '/api': {
                // target: 'http://localhost:8081',
                target: 'https://caf46f01-d16a-4bbb-a0a3-9d61a1033a3c.mock.pstmn.io',
                ws: true, // 是否启用websockets
                changeOrigin: true,  // 代理时是否更改host
                pathRewrite: {
                    '^/api': '' //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
                }
            }
        }
    }
}