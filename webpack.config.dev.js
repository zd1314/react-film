const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: [path.resolve(__dirname, './app/main.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 8080,
    proxy: {
      // 当你请求是以/v2开头的接口，则我帮你代理访问到https://api.douban.com
      '/data/*': {
        target: 'http://www.weather.com.cn/', // 你接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      }
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        //图片配置
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[hash].[ext]',//所有图片在一个目录
            }

          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
     new webpack.optimize.ModuleConcatenationPlugin(),
  ]
}