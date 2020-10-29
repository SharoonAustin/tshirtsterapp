const path=require('path');

module.exports={
    entry:'./src/app.js',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude: /node_modules/
        },{
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        },
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name:'assets/[name].[ext]'
              }
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
              }
            }
          }]            
          }]
    },
    devtool:'cheap-module-eval-source-map'
}
