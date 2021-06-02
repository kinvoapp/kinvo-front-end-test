const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, '/'),
    chunkFilename: '[name].[chunkhash].kinvo.chunk.js',
    library: '[name]',
    umdNamedDefine: false,
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  optimization: {
    splitChunks: {
      name: false,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minChunks: 1,
          priority: -10,
          enforce: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(ts|tsx|jsx|js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@utils': path.join(__dirname, './src/utils'),
      '@styles': path.join(__dirname, './src/styles'),
      '@components': path.join(__dirname, './src/components'),
      '@pages': path.join(__dirname, './src/pages'),
      '@routes': path.join(__dirname, './src/routes'),
      '@context': path.join(__dirname, './src/context'),
      '@services': path.join(__dirname, './services'),
      '@global.types': path.join(__dirname, './src/global.types.ts'),
      react: path.resolve('./node_modules/react'),
    },
  },
  devServer: {
    host: 'localhost',
    disableHostCheck: true,
    historyApiFallback: true,
    port: 9005,
  },
  plugins: [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: 'public' }, { from: 'public/assets/favicon.ico' }],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
};
