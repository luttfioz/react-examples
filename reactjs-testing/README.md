# Testing

[jest](https://github.com/facebook/jest) is a popular testing library that's commonly used with React. It has methods like `expect` and matchers like `toBe`, `toBeGreaterThan`, etc..

[enzyme](https://github.com/airbnb/enzyme) is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. It has methods like `shallow` and `mount` that are useful for testing React components.

### Getting Started

Import [setup](setup/) project into your workspace. Setup project contains the initial template you should start working on.
You can find the completed version of this project in [solution](solution/) folder.

Before starting, run `npm i`, which will download enzyme. Jest is already built-in with `create-react-app`.

Testing is done with the following command:

`npm test`

### Testing file pattern

Jest will look for test files with any of the following popular naming conventions:

* Files with .js suffix in `__tests__` folders.
* Files with .test.js suffix.
* Files with .spec.js suffix.

Following pattern is a commonly preferred file structure for writing unit tests of components, i.e. every component has it's own .test.js file within the same directory.

```
Table
├── index.js
└── index.test.js
```

### Testing a component

We'll write the unit tests of Table component. Add following imports to the test file:

```
import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from './index';
```

Add the following test cases for Table component. It basically tests if there is exactly one `TableHeader` and `TeableBody` components.

```
describe('Table tests without data: ', () => {
    const wrapper = shallow(<Table />);
    test('should render one TableHeader without error', () => {
        expect(wrapper.find('TableHeader').length).toBe(1);
    });
    test('should render one TableBody without error', () => {
        expect(wrapper.find('TableBody').length).toBe(1);
    });
})
```

Here are the explanations of some keywords used:

`describe` creates a block that groups together several related tests

`test` All you need in a test file is the `test` method which runs a test. It's also under the alias: `it`

`shallow` Shallow renders the root node and returns a shallow wrapper around it, i.e. it does not render the contents of sub-components if there are any.

### Testing with mock data

Add following imports too to the test file:

```
import * as mockData from '../../data'
import { IntlProvider } from 'react-intl';
```

Create another `describe` group for test cases with data and add following test cases:

```
describe('Table tests with data: ', () => {
    test('should render table row quantity correctly', () => {
        const wrapper = mount(<IntlProvider><Table data={mockData.productList} /></IntlProvider>);
        expect(wrapper.find('tr').length).toBe(4);
    });
    test('should call prop method on clicking delete icon', () => {
        const onDelete = jest.fn();
        const wrapper = mount(<IntlProvider><Table onDelete={onDelete} data={mockData.productList} /></IntlProvider>);
        const deleteIcon = wrapper.find('.material-icons').at(0);
        deleteIcon.simulate('click');
        expect(onDelete).toBeCalledWith(0);
    });

})
```

The first test case simply sends data to the `Table` as a prop, and tests whether correct number of `<tr>` elements are rendered. The reason we used `mount` here is that, `<tr>` elements are in sub-components of `Table` component

The second test case tests whether the delete method is called with the correct parameter. Mock functions are created with `jest.fn()`. After retrieveing deleteIcon, we can call `simulate` with any event on the DOM, such as click, hover, mouseOver, etc... Finally, jest has a matcher called `toBeCalledWith` that checks if the function inside `expect` has been called with the parameter given.
