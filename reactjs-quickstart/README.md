# Quick Start

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Create React App is Facebook's officially supported way to create single-page React applications. It offers a modern build setup with no configuration. You don’t need to install or configure tools like Webpack or Babel. They are preconfigured and hidden so that you can focus on the code. Just create a project, and you’re good to go.

### Getting Started

Follow the instructions below to complete the project. You can find the complete version of the project in [solution](solution/) folder

Run the following commands. It will create an empty React application and start it.
```sh
npx create-react-app my-app
cd my-app
npm start
```



Running **npx create-react-app my-app**  command will create a directory called my-app inside the current folder. Inside my-app, it will create the following app structure tree.

```sh
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

No configuration or complicated folder structures are required, just the files you need to build your app. Once the installation is done, you can open your project folder using **cd my-app**.

Inside the newly created project, you can run **npm start**, that will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

### Adding Some Content

Following is the initial content od the project. Modify `App.js` with the following content to see the instant result. You should also add the images folder from the solution project.

```sh
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Products</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th><img src={require('./images/tablet.jpg')} alt="img-tablet" width="100" height="100" /></th>
              <th>10-Inch Tablet</th>
              <th>269</th>
              <th>Android 4.3 Jelly Bean, 10.1-inch Full HD (1920 x 1200) Display</th>
            </tr>
            <tr>
              <th><img src={require('./images/shoe.jpg')} alt="img-shoe" width="100" height="100" /></th>
              <th>Running Shoe</th>
              <th>48</th>
              <th>Synthetic and Mesh, Imported, Rubber sole, Flex Film welded upper, HydraMAX moisture-wicking collar lining</th>
            </tr>
            <tr>
              <th><img src={require('./images/watch.jpg')} alt="img-watch" width="100" height="100" /></th>
              <th>Slim Bracelet Watch</th>
              <th>27</th>
              <th>A narrow gold-tone bracelet supports the round case of this  watch, which features three rhinestones marking each hour and a sparkling halo on the bezel</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

```
