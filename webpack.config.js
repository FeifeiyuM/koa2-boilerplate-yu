var path = require('path')

const clientConfig = {
	module: {
    loaders: [{
      test:/\.js$/,
      loader:'babel-loader',
      exclude:/node_modules/,
      include:__dirname,
      query:{
        presets: ['es2015', 'react']  
      }
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
      include: __dirname
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: __dirname
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i, 
      loader: 'url-loader?limit=50000&name=[path][name].[ext]' 
    },
    //fonts loader
    { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
}

const serverConfig = {
  name: 'server side package',
  target: 'node',
  module: {
    loaders: [
    { test: /\.js$/, 
      loader: "babel-loader",
      exclude: /node_modules/,
      include: __dirname,
      query:{
          presets: ['es2015', 'react'],
          compact: true  
        }
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i, 
      loader: 'url-loader?limit=50000&name=[path][name].[ext]' 
    },
    //fonts loader
    { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },

    {test: /\.css$/, loader: path.join(__dirname, 'style-loader', 'style-collector') + '!css-loader'},
    {test: /\.less$/, loader: path.join(__dirname, 'style-loader', 'style-collector') + '!css-loader!less-loader'}
    ]
  }
}

module.exports = { clientConfig: clientConfig, serverConfig: serverConfig }