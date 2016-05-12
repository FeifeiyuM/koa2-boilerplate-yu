该目录下是采用服务打包时，用于提取样式文件的配置文件

style-collector.loader.js 
style-collector 文件用于提取渲染页面的样式，并返回样式内容

文件定义了webpack loader， 即加载器。它的大概意思就是，在加载样式文件的地方，插入一段JS代码，这段JS代码的作用是调用style-collector.js的add方法，而css代码会转成字符串作为参数传给add方法。


