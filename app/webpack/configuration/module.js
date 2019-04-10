export default {
  rules: [
    {
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64]',
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    }
  ]
};
