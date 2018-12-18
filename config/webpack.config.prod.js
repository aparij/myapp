const paths = require('./paths');

module.exports = {
  mode: 'production',
  entry: './src/App.js',
  devtool: 'source-map',
  output: {
    //path: __dirname + '/build',
    //library: ['MyLib'],
    umdNamedDefine: true,
    path: paths.appBuild,
    filename: 'app.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,

        loader: require.resolve('babel-loader'),
        options: {
          customize: require.resolve(
            'babel-preset-react-app/webpack-overrides'
          ),

          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
                  }
                }
              }
            ]
          ],
          cacheDirectory: true,
          // Save disk space when time isn't as important
          cacheCompression: true,
          compact: true
        }
      }
    ]
  }
};
