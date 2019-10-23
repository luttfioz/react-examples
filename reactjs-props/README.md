# Props

Props are attributes assigned in JSX. They are typically used for sending data to the component. Props are external and controlled by whatever renders the component.


### Getting Started

Import [setup](setup/) project into your workspace. Setup project contains the initial template you should start working on.
You can find the completed version of this project in [solution](solution/) folder.

### Adding props to a component

We can define whatever name we want to use for a prop. In the `App.js`, send a prop named `title` to the `Heading` component

```
<Heading title="Products"/>
```

Within the component, props can be accessed via `props` keyword. Modify `Heading` component as follows, so that it will display whatever text is sent via props:

```sh
import React from 'react';

class Heading extends React.Component {
    render() {
        return <h1 className="text-center">{this.props.title}</h1>;
    }
}

export default Heading;
```
It's all done. Sending a prop to a component, and accessing a prop from inside the component are the basic steps.
### Adding more props

In the same fashion, let's add more props. Table component should get its data from props. Therefore, we import data from json file in the `App.js` for this tutorial.

```
import * as data from './data.json';
```

And then, this data can be sent to `Table` through props:

```
<Table data={data.productList}/>
```

In the `Table.js`, the component can directly send the data to `TableBody`

```
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './style.css'

export default class Table extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody list={data}/>
            </table>
        );
    }
}
```
Finally in the `TableBody.js` file, data can be retrieved from props. With the help of [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function, table rows will be rendered with iteration over the list.


```
import React from 'react';
import Thumbnail from '../Thumbnail';
import images from '../../images/index';

export default class TableBody extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <tbody>
                {list.map((item, index) => {
                    return (<tr key={index}>
                        <th><Thumbnail src={images[item.img]} alt={item.alt} /></th>
                        <th>{item.name}</th>
                        <th>{item.price}</th>
                        <th>{item.description}</th>
                    </tr>);
                })}
            </tbody>);
    }
}
```

There is one more component here named `Thumbnail`, which has a predefined size and style for showing the images. It has two props; `src` and `alt` needed for each image:

```sh
import React from 'react';

class Thumbnail extends React.Component {
    render() {
        return <img src={this.props.src} alt={this.props.alt} width="100" height="100"/>
    }
}

export default Thumbnail;
```
