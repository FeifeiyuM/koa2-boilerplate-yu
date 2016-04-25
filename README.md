# KOA2 示例工程

##采用技术：
- 核心采用koa2 node server框架，
- 采用模板文件： nunjucks
- HTTP请求代理: fetch-node
- 打包： gulp

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
 
 ## 打包 gulp
  - 对模板文件所在路径（./views）下的less， js文件进行打包压缩，并将其放置在静态文件所在路径（./public）
 
