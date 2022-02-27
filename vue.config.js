const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    // https://blog.csdn.net/xiaomajia029/article/details/88320233,版本问题引起的
    runtimeCompiler: true,
})