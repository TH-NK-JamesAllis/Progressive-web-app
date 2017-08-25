var path = require('path'),
    webpack = require('webpack');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports =  {
    entry: {
        client: './src/index.js',
    },
    context: __dirname,
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: '/public/js',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties',
                    'transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin
                  .extract({
                    fallback: 'style-loader',
                    use: [
                      { loader: 'css-loader', query: { modules: false, sourceMaps: false } },
                      { loader: 'sass-loader', query: { sourceMaps: true } }
                    ]
                  })
            }
        ]
    },
    
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new WebpackAssetsManifest({
      output: 'asset-manifest.json',
      writeToDisk:true
    }),
    new ExtractTextPlugin("../css/main.css")
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
