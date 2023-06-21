const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    main: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Main Page"
    }
  }
})
