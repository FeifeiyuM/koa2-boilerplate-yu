# KOA2 示例工程

##采用技术：
 - 核心采用koa2 node server框架，
 - 采用模板文件： [nunjucks]: https://mozilla.github.io/nunjucks/
 - HTTP请求代理: fetch-node
 - 打包： gulp (webpack: 支持react客户端（browser） + 服务端（server.js))
 

##start:
 - npm install （安装依赖）
 - npm start （启动服务）
 - 访问本地地址： http://localhost:3000/
 - 

## KOA2：
 - 模板设置 （koa-nunjucks-promise ）
 - 静态文件路径设置（koa-mount，koa-static） 
 - 日志设置 （oa-logger ）
 - 参数解析 （ koa-bodyparser）
 - 路由配置 （ koa-router ）
 
 
 ### 路由实例
 - get请求：（hello world）
 - get 请求： （nunjucks模板渲染）
 - post 请求： 数据提交
 - 代理：即通过fetch api 代理请求接口数据
 - RESTful： get， post， delete，数据增、删、查。 通过读取本地JSON文件实现
 - React：'Hello world' 实例, Server 端打包渲染实例, Redux + React counter 实例
 

## 打包配置
  - 所有配置项在文件 gulpfile.babel.js 中，
  - isDevEvn 配置环境，true为开发环境（代码不压缩），false 为生产环境（代码压缩,删除调试配置)
  - 打包路径配置：(可以根据需要，配置需要打包的路径，尽量不要将所有项目都加入到打包路径)


  >  1、'entry' 为不是采用webpack工具打包的路径，路径书写格式为从当前目录开始，例：'./views/template'
  >  2、'webpackEntry'为采用webpack工具打包的路径，采用webpack打包时必须包含客户端（browser端）的入口文件，且命名必须为client.js or index.js。如果需要打服务端渲染的包，请将其命名为server.js  
  >  3、如果采用es6开发的话，用webpack打包      
  >  4、'output' 为打包后文件输出路径，输出路径需配置为服务器静态文件路径, 假如： 服务器静态文件路径为'./public'; 入口文件为： './views/template/index.js'; 非webpack打包方式，输出文件为：'./public/template/index.min.js'; webpack打包方式，输出文件为：'./public/template/index.bundle.js' or './public/template/server.bundle.js'

## 打包
 - gulp build 生产环境打包


