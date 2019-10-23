# minimal-react-webpack-babel-setup

## Credits
This tutorial is orginally authored and published by Robin Weiruch (rwieruch) at  https://github.com/rwieruch/minimal-react-webpack-babel-setup and his blog entry https://www.robinwieruch.de/minimal-react-webpack-babel-setup/.  We have added sections on tools and debugging with VSCode.

## Features

* React 16
* Webpack 4
* Babel 7
* Hot Module Replacement

## Installation (Quick)

* `https://gitlab.eteration.com/academy/tutorials/react/minimal-react-webpack-babel-setup.git`
* cd minimal-react-webpack-babel-setup
* npm install
* npm start
* visit `http://localhost:8080/`

## Do it your self (Step by step guideline)

Before you can get started, you should make sure to have an installed editor and terminal on your machine. In addition, you will need an installed version of node with npm. Make sure to have setup everything of it before you continue to read.

For any new project, there has to be a folder to allocate the project’s configuration but most importantly its source code. This folder usually resides in another folder where all your other projects can be found. That’s at least how I do it for my projects. In order to get started with your new project, create its folder on the command line or in your favorite folder/file explorer (e.g. MacOS finder, editor/IDE side bar) and navigate into it.

```sh
mkdir minimal-react-boilerplate
cd minimal-react-boilerplate
```

Now you have got the project’s folder. Next you can initialize it as npm project. By giving it the -y shorthand flag, you are telling npm that it should take all the defaults. If you leave the flag out, you are in charge to specify the information about your project manually.

```sh
npm init -y
```

You can checkout the package.json file after initializing your project as npm project. It should be filled with your defaults. If you want to change your defaults, you can see and change them with the following commands on the command line:

```sh
npm config list

npm set init.author.name "<Your Name>"
npm set init.author.email "you@example.com"
npm set init.author.url "example.com"
npm set init.license "MIT"
```

After setting up your npm project, you can install node packages (libraries) to your project with npm itself. Once you install a new node package, it should show up in your package.json file.

The next step is to create a distribution folder. The folder will be used to serve your application. Serving the app makes it possible to view it in the browser or host it on an external server to make it accessible for everyone.

The whole served application contains only of two files: a .html and a .js file. While the .js file will be generated automatically from all of your JavaScript source files (via Webpack) later, you can already create the .html file manually as an entry point for your application.

From root folder (minimal-react-boilerplate):

```sh
mkdir dist
cd dist
touch index.html
```

As a side note: The distribution folder will be everything you need to publish your web app to a hosting server. It will only need the HTML and JS file to serve your app.

The created file should have the following content:

dist/index.html
<!DOCTYPE html>
```html
<html>
  <head>
    <title>The Minimal React Webpack Babel Setup</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```
Two important facts about the content:

the bundle.js file will be a generated file by Webpack (1)
the id=“app” attribute will help our root React component to find its entry point (2)
Therefore our next possible steps are:

* (1) setup Webpack to bundle our source files in one file as bundle.js
* (2) build our first React root component which uses the entry point id=“app”
Let’s continue with the former step followed by the latter one.

### Webpack Setup
You will use Webpack as module bundler and build tool. Moreover you will use webpack-dev-server to serve your bundled app in a local environment. Otherwise you couldn’t see it in the browser to develop it. Last but not least, you need the webpack-cli node package to configure your Webpack setup in a configuration file later on. Let’s install all three node packages by using npm.

From root folder:

```sh
npm config set proxy http://user:pass@proxy.company.tr:8080
npm config set https-proxy http://user:pass@proxy.company.tr:8080
npm config set strict-ssl false


npm install --save-dev webpack webpack-dev-server webpack-cli
```
Now you should have a node_modules folder where you can find your third party dependencies. The dependencies will be listed in the package.json file as well, since you used the –save-dev flag. Your folder structure should look like the following by now:

Folder structure:

```
- dist
-- index.html
- node_modules
- package.json
```

In the package.json file, you can add a start script additionally to the default given scripts to run the webpack-dev-server.

package.json
```json
...
"scripts": {
  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
  ...
},
...
```
The script defines that you want to use the webpack-dev-server with a configuration file called webpack.config.js. The --mode development flag just adds default Webpack configurations which came with Webpack 4. You wouldn’t need the flag for Webpack 3.

Let’s create the required webpack.config.js file.

From root folder:

```sh
touch webpack.config.js
```

You can continue by providing the following content:

webpack.config.js

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

Roughly the configuration file says that (1) we want to use the src/index.js file as entry point to bundle all of its imported files. (2) The bundled files will result in a bundle.js file which (3) will be generated in our already set up /dist folder. The /dist folder will be used to serve our app.

What is missing in our project is the src/index.js file.

From root folder:
```sh
mkdir src
cd src
touch index.js
```

src/index.js
```
console.log('My Minimal React Webpack Babel Setup');
```

Folder structure:
```
- dist
-- index.html
- node_modules
- src
-- index.js
- package.json
- webpack.config.js
```

Now you should be able to start your webpack-dev-server.

From root folder:

```
npm start
```

You can open the app in a browser. Additionally you should see the console.log() in the developer console.

You are serving your app via Webpack now. You bundle your entry point file src/index.js as bundle.js, use it in dist/index.html and can see the console.log() in the developer console. For now it is only the src/index.js file. But you will import more JS files later on in that file, which will get bundled automatically by Webpack in the bundle.js file.

### Babel Setup
Babel enables you writing your code in with JavaScript which isn’t supported yet in most browser. Perhaphs you have heard about JavaScript ES6 (ES2015) and beyond. With Babel the code will get transpiled back to vanilla JavaScript so that every browser, without having all JavaScript ES6 and beyond features implemented, can interpret it. In order to get Babel working, you need to install two of its main dependencies.

From root folder:

```sh
npm install --save-dev @babel/core @babel/preset-env
```

Moreover, in order to hook it up to Webpack, you have to install a so called loader:

```sh
npm install --save-dev babel-loader
```

As last step, since you want to use React, you need one more configuration to transform the React’s JSX syntax to vanilla JavaScript.

From root folder:

```
npm install --save-dev @babel/preset-react
```

Now, with all node packages in place, you need to adjust your package.json and webpack.config.js to respect the Babel changes. These changes include all packages you have installed.

package.json
```json
...
"keywords": [],
"author": "",
"license": "ISC",
"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
},
"devDependencies": {
...
```

webpack.config.js

```js
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

You can start your application again. Nothing should have changed except for that you can use upcoming ECMAScript functionalities for JavaScript now.

An optional step would be to extract your Babel configuration in a separate .babelrc configuration file.

From root folder:

```
touch .babelrc
```

Now you can add the configuration for Babel, which you have previously added in your package.json, in the .babelrc file. Don’t forget to remove the configuration in the package.json afterward. It needs to be configured at only one place.

.babelrc
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

Babel enables you to use future JavaScript in your browser, because it transpiles it down to vanilla JavaScript. Now you are set up to build your first React component now.

### React Setup in a Webpack + Babel Project
In order to use React, you need two more node packages. The react and react-dom packages should fix your npm start.

From root folder:

```sh
npm install --save react react-dom
In your src/index.js you can implement your first hook into the React world.
```

src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
```

You should be able to see the output in your browser rather than in a developer console now.

```ReactDOM.render``` needs two parameters. The first parameter is your JSX. It has to have always one root node. The second parameter is the node where your output should be appended. Remember when we used ```<div id="app"></div>``` in the dist/index.html file? The same id is your entry point for React now.

### Hot Module Replacement in React
A huge development boost will give you react-hot-loader (Hot Module Replacement). It will shorten your feedback loop during development. Basically whenever you change something in your source code, the change will apply in your app running in the browser without reloading the entire page.

From root folder:
```sh
npm install --save-dev react-hot-loader
```
You have to add some more configuration to your Webpack configuration file.

webpack.config.js

```js
const webpack = require('webpack');


module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            retainLines: true,
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }

};

```

Additionally in the src/index.js file you have to define that hot reloading is available and should be used.

src/index.js

```
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
```

Now you can start your app again.

From root folder:

```
npm start
```

When you change your title for the React component in the src/index.js file, you should see the updated output in the browser without any browser reloading. If you would remove the ```module.hot.accept();``` line, the browser would perform a reload if something has changed in the code.

### VSCode React Debug

Visual Studio Code is an open-source IDE maintained by Microsoft, which integrates tightly with the Javascript, React and Webpack. This integration enables powerful editing features including code completion, inline compilation errors, and refactoring tools. We use VS Code for everyday development, so it's convenient to be able to set breakpoints and debug from the IDE as well. You can download and install VSCode from [https://code.visualstudio.com]. After you install start VSCode and add minimal-react-boilerplate folder as a folder into the project explorer.

#### Chrome DevTools Protocol
The Chrome DevTools Protocol allows external tools to interact with the debugging console, via websockets or a Javascript API. The –remote-debugging-port flag on Chrome enables this feature. For example, a client would request http://localhost:{port}/json, to get the available tabs. This returns a list of available tabs and websocket urls. The client can then send messages via a websocket connection to affect the debugger (e.g., to set a breakpoint), and listen to messages on the same websocket connection (e.g., to read log messages from the console). Putting all the puzzle pieces together; the basic steps for getting debugging to work with VSCode and Chrome are:
* Set up an appropriate Launch Configuration in Code 
* Enable Chrome in debugging mode 
* Serve local build artifact
* Attach Code to the Chrome debugger by choosing Start Debugging from the Debug menu in Code; Select the tab that is running
* Debug!
Let's dive into the details and configurations for each of these steps.

#### Install the Debugger for Chrome extension:
VSCode provides a really nice way to install extensions using the Extensions button on the side panel. You can search for extensions by typing in the search bar. The panel will show you all extensions available on the VSCode [ marketplace |https://marketplace.visualstudio.com/vscode]

VSCode allows you to build launch configurations. A launch configuration is a JSON file that lets you save debugging details and set up. You can read more about launch configurations here: https://code.visualstudio.com/docs/editor/debugging#_launch-configurations.

You can store all VSCode IDE related configs in a directory named .vscode at the root level of your project, and commit that directory to your VCS. That way, every engineer on your team ends up using the same set of IDE configs and settings. You can always do user level overrides if need be. You can create a launch.json file in the .vscode directory, or you can click on the Debug button on the left side panel to have the debugger window show up, and create a launch config from within there.

launch.json:
```json
{

    "version": "0.2.0",
    "configurations": [

        {
            "type": "chrome",
            "request": "launch",
            "name": "Minimal React Launch",
            "url": "http://localhost:8080",
            "sourceMaps": true,
            "webRoot": "${workspaceFolder}/src",
        }
    ]
}
```
VSCode recommends that bable-loader and Webpack are configured properly to work with the Crhome debugger to manage source maps. To start debugging.  The debugger uses sourcemaps to let you debug with your original sources, but sometimes the sourcemaps aren't generated properly and overrides are needed. This done with a propery in launch.json called sourceMapPathOverrides, a mapping of source paths from the sourcemap, to the locations of these sources on disk. Useful when the sourcemap isn't accurate or can't be fixed in the build process. We will not need it now. You can enter ```.scripts``` in the Debug Console to see a listing of all scripts loaded in the runtime, their sourcemap information, and how they are mapped to files on disk. 

If you're using Webpack, you must set the ```"devtool": "source-map"``` option (in your webpack.config.js file) as the others produce lower-fidelity sourcemaps and you may have issues setting breakpoints. See the full list of [devtool options|https://webpack.js.org/configuration/devtool/] for webpack for more information.  Babel will make an effort to generate code such that items are printed on the same line that they were on in the original file. This option exists so that users who cannot use source maps can get vaguely useful error line numbers, but it is only a best-effort, and is not guaranteed in all cases with all plugins. We will need to set the ```retainLines``` property to ```true``` for correct line mapping between ES5 code and the debugger.


webpack.config.js
```javascript
const webpack = require('webpack');


module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            retainLines: true,
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }

};


```

To start debugging, choose "Start Debugging" from the Debug menu in Code. If you set a breakpoint that is hit when the page is loading, you will need to REFRESH. Set breakpoints and have fun!


### Useful VSCode Features

VSCode has following IDE-like features which make it a practical editor to work with complex projects.

* Opening a whole project
* Project navigator with easy shortcuts (collapse, create new, refresh)
* String search (and replace)
* File search (CTRL/CMD + P)
* Source control (commit, pull, push etc.)
* Extensions (GitLens, ES7/React, etc)
* Code formatting (righ click or shortcut)
* Code indentation (spaces, tabs)
* Integrated terminal windows
* Pinned tabs or temporary tabs

