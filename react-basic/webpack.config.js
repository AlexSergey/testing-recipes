const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts(x)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
                ['@babel/preset-react', {
                  runtime: 'automatic',
                }]
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ]
  },
  entry: './src/index.tsx',
  plugins: [new HtmlWebpackPlugin()]
};
