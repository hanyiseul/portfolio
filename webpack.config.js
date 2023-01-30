const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: 'development',
  entry: {
    uid: './src/uid.js',
    vendor: ['jquery'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    port: 9900,
  },
  performance: {
    //hints: 'error',
    maxAssetSize: 350000, // 350KB
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
			{
				test: /\.(mp4|webm)$/i,
				use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'assets/video',
						esModule: false,
					}
				}
				]
				},
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          inlineRequires: '/assets/'
        }
      }
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    minimize: true,
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `Project build time : ${new Date().toLocaleTimeString()}`,
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/uid.css',
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              quality: 85,
            },
            webp: {
              lossless: 1,
            },
            avif: {
              cqLevel: 0,
            },
          },
        },
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlWebpackPlugin({
      title: 'INDEX',
      template: path.join("src", "handlebars", "templates", "index.hbs"),
      filename: path.join("pages", "templates", "index.html"),
    }),
    new HtmlWebpackPlugin({
      title: 'MAIN',
      template: path.join("src", "handlebars", "templates", "main.hbs"),
      filename: path.join("pages", "templates", "main.html"),
    }),
    new CopyPlugin({
        patterns: [
            {from: path.join('src', 'assets', 'images'), to: path.join('assets', 'images')},
        ],
    }),	
  ],
  devtool: 'source-map',
};