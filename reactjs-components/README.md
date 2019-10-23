# Components

This project primarily focuses on creating reusable [React Components](https://reactjs.org/docs/react-component.html?utm_source=caibaojian.com) and using them inside the app. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

### Getting Started

Import [setup](setup/) project into your workspace. Setup project contains the initial template you should start working on.
You can find the completed version of this project in [solution](solution/) folder.

### Creating Our First Component

Create a folder named `components` inside the `src` folder. This folder will basically contain our UI components. 

Inside this folder, create a file named `Heading.js` with the following content

```sh
import React from 'react';

class Heading extends React.Component {
    render() {    
        return <h1 className="text-center">Products</h1>;
    }
}

export default Heading;
```

It's all done and now you can use the component wherever you need. Just import the component in App.js:

`import Heading from './components/Heading'`

And within the `render` method, you can use the component:

`<Heading />`

### Creating Further Components

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components. Don’t be afraid to split components into smaller components. For this project, we'll make a `Table` component, which is composed of a `TableHeader` and `TableBody` component. Therefore, this component will require more than one file. Create a folder named `Table` inside the `components` folder, and add the following files:

```sh
components
├── Table
│   ├── index.js
│   ├── TableHeader.js
│   ├── TableBody.js
│   └── style.css
```

Add the following content to `TableHeader` component:

```sh
import React from 'react';

class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
            </thead>);
    }
}

export default TableHeader;
```

And add the following content to `TableBody` component:

```sh
import React from 'react';

class TableBody extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <th><img src={require('../../images/tablet.jpg')} alt="img-tablet" width="100" height="100" /></th>
                    <th>10-Inch Tablet</th>
                    <th>269</th>
                    <th>Android 4.3 Jelly Bean, 10.1-inch Full HD (1920 x 1200) Display</th>
                </tr>
                <tr>
                    <th><img src={require('../../images/shoe.jpg')} alt="img-shoe" width="100" height="100" /></th>
                    <th>Running Shoe</th>
                    <th>48</th>
                    <th>Synthetic and Mesh, Imported, Rubber sole, Flex Film welded upper, HydraMAX moisture-wicking collar lining</th>
                </tr>
                <tr>
                    <th><img src={require('../../images/watch.jpg')} alt="img-watch" width="100" height="100" /></th>
                    <th>Slim Bracelet Watch</th>
                    <th>27</th>
                    <th>A narrow gold-tone bracelet supports the round case of this  watch, which features three rhinestones marking each hour and a sparkling halo on the bezel</th>
                </tr>
            </tbody>);
    }
}

export default TableBody;
```
Now we're ready to use these sub-components in our main `Table` component. Just import and add these components:

```
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './style.css'

export default class Table extends React.Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}
```

Open `App.css` and move all the styles that are related to Table component to its own style file.

That's all. Now `Table` component can be used in App.js:

```
import React, { Component } from 'react';
import Heading from './components/Heading'
import Table from './components/Table'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Table />
      </div>
    );
  }
}

export default App;
```