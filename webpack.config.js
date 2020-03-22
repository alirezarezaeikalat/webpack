module.exports = {
  // define entry point
  entry: "./src/script1.js",

  // define output point
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },

  // config loaders
  module: {
    rules: [
      // @babel loader
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      // css, style and sass loaders
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Compiles Sass to CSS
          "sass-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Creates `style` nodes from JS strings
          "style-loader"
        ]
      }
    ]
  }
};