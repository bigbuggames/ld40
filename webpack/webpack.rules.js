module.exports =  [
  { 
    test: /\.js$/, 
    exclude: /node_modules/, 
    loader: 'babel-loader'
  },
  {
    test: /\.css$/,
    use: [
      { 
        loader: 'style-loader' 
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }
    ]
  },
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: ['file-loader']
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: ['file-loader']
  }
];
