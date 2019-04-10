import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isProduction = process.env.NODE_ENV === 'production'

const plugins = [];

if (isProduction) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /.js$/
    })
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin(),
    new WebpackNotifierPlugin({
      title: 'Weather APP by Cristina Rojas'
    })
  )
}

export default plugins;
