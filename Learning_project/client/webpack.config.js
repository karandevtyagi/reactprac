const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill','react-hot-loader/patch','./src/index.js'],
    output: {
        filename: 'bundle.js',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader','react-hot-loader/webpack','eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
              },{
                test: /\.(woff(2)?|ttf|eot|svg|png|jp(e*)g)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/',
                    }
                  }
                ]
              },{
                test: /\.(scss)$/,
                use: [{
                  loader: 'style-loader', // inject CSS to page
                }, {
                  loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                  loader: 'postcss-loader', // Run post css actions
                  options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader: 'sass-loader' // compiles Sass to CSS
                }]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ],
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    devServer:{
        historyApiFallback:true
    }
    }