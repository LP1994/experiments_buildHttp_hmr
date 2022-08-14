/*
 Project: experiments_buildHttp_hmr
 FileDirPath: webpack.config.js
 Author: 12278
 Email: 1227839175@qq.com
 IDE: WebStorm
 CreateDate: 2022-07-28 19:30:55 Thursday
 */

'use strict';

const path = require( 'path' );

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  context: path.resolve( __dirname, './' ),
  devServer: {
    allowedHosts: 'all',
    bonjour: true,
    client: {
      logging: 'info',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
      reconnect: true,
      webSocketTransport: 'ws',
    },
    compress: true,
    devMiddleware: {
      index: false,
      methods: [
        'GET',
        'HEAD',
        'POST',
        'PUT',
        'DELETE',
        'CONNECT',
        'OPTIONS',
        'TRACE',
        'PATCH',
      ],
      writeToDisk: true,
    },
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    liveReload: true,
    open: [
      // Microsoft Edge browser on Windows platform.
      {
        target: [
          'http://localhost:8100/index.html',
        ],
        app: {
          name: [
            'msedge',
          ],
          arguments: [
            '--new-window',
          ],
        },
      },
      // Chrome browser on Windows platform.
      {
        target: [
          'http://localhost:8100/index.html',
        ],
        app: {
          name: [
            'chrome',
          ],
          arguments: [
            '--new-window',
          ],
        },
      },
      // Firefox browser on Windows platform.
      {
        target: [
          'http://localhost:8100/index.html',
        ],
        app: {
          name: [
            'firefox',
          ],
          arguments: [
            '--new-window',
          ],
        },
      },
      // Opera browser on Windows platform.
      {
        target: [
          'http://localhost:8100/index.html',
        ],
        app: {
          name: [
            'opera',
          ],
          arguments: [
            '--new-window',
          ],
        },
      },
      // Chrome browser on macOS platform.
      {
        target: [
          'http://localhost:8100/index.html',
        ],
        app: {
          name: [
            'Google Chrome',
          ],
          arguments: [
            '--new-window',
          ],
        },
      },
      // Chrome browser on Linux platform.
      {
        target: [
          'http://localhost:8100/index.html',
        ],
        app: {
          name: [
            'google-chrome',
          ],
          arguments: [
            '--new-window',
          ],
        },
      },
    ],
    port: 8100,
    server: {
      type: 'http',
    },
    setupExitSignals: true,
    webSocketServer: 'ws',
  },
  entry: {
    index: {
      import: [
        'webpack-dev-server/client/index.js?logging=info&progress=true&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=Infinity&hot=true&live-reload=true',
        './src/index.css',
        './src/index.js',
      ],
    },
  },
  experiments: {
    buildHttp: {
      allowedUris: [
        uri => {
          // experiments.buildHttp.allowedUris.uri--->http://huyaimg.msstatic.com/avatar/1095/ea/540f76f690f002fde18957f5ac920f_180_135.jpg
          console.log( `\n\n\nexperiments.buildHttp.allowedUris.uri--->${ uri }\n\n\n` );

          return true;
        },
      ],
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jng|bmp|dcx|gif|icns|ico|jbig2|jpe|jpeg|jpg|pam|pbm|pcx|pgm|png|pnm|ppm|psd|rgbe|tga|tif|tiff|wbmp|xbm|xpm|svg|svgz|webp|heif|heic)$/i,
        type: 'asset',
        generator: {
          emit: true,
          filename: '[name][ext]',
        },
      },
    ],
  },
  name: 'webpack.config.js',
  plugins: [
    new HtmlWebpackPlugin( {
      inject: 'body',
      scriptLoading: 'defer',
    } ),
  ],
  target: [
    'web',
    'es2022',
  ],
  watch: true,
};
