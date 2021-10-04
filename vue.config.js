module.exports = {
  outputDir: "./build",
  devServer: {
    proxy: {
      "/api": {
        target: "http://152.136.185.210:4000",
        pathRewrite: {
            "^/api": ""
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets"
      }
    }
  }
}
