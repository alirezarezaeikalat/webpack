
1. to install webpack:
    npm install Webpack

2. we can use webpack to require a .js file into another:
    js2:
      module.exports = 'fadfad';
    js1:
      var message = require('./js2');
      alert(message);
  
  then use webpack to bundle to file together:
    npx webpack {entrypoint} -o {outputpoint}  :
    npx webpack js1.js -o ./bundle.js

3. We can use webpack.config.js file to configure webpack
    and run the webpack command only once, and we don't 
    have to use cli every time:

    in webpack.config.js file:

    module.exports = {
      // define entry point 
      entry: "./src/script1.js",
      // define output point
      output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
      }
    }

    then run:
      npx webpack


4. How to use babel loader:
    a. first install babel-core and babel-loader
    b. then install the presets that you want to use:
          for example jsx preset or es6 preset
            npm install babel-preset-es2015
    c. Then configure webpack.config.js file to use babel laoder 

check this github page:
    https://github.com/babel/babel-loader  


5. We can use css loaders to load css for a certain component,
   we need 2 different loader:
      css loader, style loader:
        a. css-loader, loads the css into our js file
        b. style-loader adds our css into the dom

    a. first install css-loader and style-loader
    b. then add them to config file
      check this site:
        https://github.com/webpack-contrib/style-loader
    c. then require the css file in the js file that control 
      the component, for example in this example, requrie it
      in the script1.js file (with this assumption that this
      file control the intro component) 

6. We can use SASS loader to transpile .scss files to .css files

      check this file:
        https://github.com/webpack-contrib/sass-loader

      a. npm install sass-loader node-sass --save-dev
      b. make config file

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