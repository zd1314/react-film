react+webpack+es6项目搭建
===
#### start: 2019-06-08


#
注意:
  - 遵循Google规范
  - 提交代码前,删除或注释无用代码,并格式化代码。
  - 写注释-大而全的注释最好
  - 使用[eoLinker](https://www.eolinker.com/)定义接口规范
  - components/common/common.js 放的是通用方法大家可以扩展

#
依赖说明：
  - react-sublime-video:视频播放插件;
  -  --save是保存这些依赖的版本到package.json
  - -dev是 安装到package.json的devDependencies属性中
  - babel-core 如果某些代码需要调用 Babel 的 API 进行转码，就要使用babel-core模块。
  - babel-loader es6转码
  - babel-preset-latest es6最新转码规则
  - babel-plugin-import  antd按需加载样式 
  - babel-preset-react  react 转码规则
  - babel-preset-stage-0  e67转码
  - css-loader css模块加载
  - Sfile-loader  file模块加载 比如图片就需要这个file加载
  - node-sass  scss模块加载
  - sass-loader  scss模块加载
  - style-loader css模块加载
  - style-loader css模块加载
  - url-loader  图片url模块加载
  - webpack  webpack核心包
  - webpack-cli 如果你使用 webpack 4+ 版本，你还需要安装 CLI
  - webpack-dev-server 达到浏览器自动刷新的效果
  - clean-webpack-plugin   webpack可以配置清空某个文件夹
  - html-webpack-plugin  html默认模板导入插件
