const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 项目端口
    port: 8080,
    // 项目主机名
    host: 'localhost',
    open: true
  }
})
