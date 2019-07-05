const URL = "http://www.cha.go.kr";

module.exports = {

  devServer: {
    proxy: { // proxyTable 설정
      '': {
        target: URL,
        changeOrigin: true,
        publicPath: {
          '^': ''
        }
      }
    }
  }
}