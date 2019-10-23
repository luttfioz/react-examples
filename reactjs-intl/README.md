# React-Intl

[react-intl](https://github.com/yahoo/react-intl) is a popular internationalization library for React apps. This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.

### Getting Started

Import [setup](setup/) project into your workspace. Setup project contains the initial template you should start working on.
You can find the completed version of this project in [solution](solution/) folder.

Before starting, run `npm i`, which will download `react-intl` package defined in `package.json`.

### Adding translation files

Add the following files in `src` folder for keeping translations of different languages.

```
translations
├── en.json
└── tr.json
```

Inside translation files, strings should be kept in key-value format. The keys should be unique and it's better to name them in a meaningful way.

```
{
    "myApp.App.Home": "HOME",
    "myApp.components.Form.name": "Name",
    ...
}
```

### Ingetrating React-Intl into app

Add the following imports to `index.js` file:

```
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_tr from 'react-intl/locale-data/tr';
import en from './translations/en.json';
import tr from './translations/tr.json';
````

Add the locale data as in the following line:

`addLocaleData([...locale_en, ...locale_tr]);`

Add custom translation files as in the following line:

`const messages = { en, tr };`

Finally, we're going to use `IntlProvider` wrapper from `react-intl` library. In the same fashion as `Provider` is used, wrap the `<App />` component with `IntlProvider`

```
<Provider store={store}>
    <IntlProvider locale="en" messages={messages.en}>
        <App />
    </IntlProvider>
</Provider>
```

It takes two parameters. Current locale is passed with `locale` prop, and translation file is passed via `messages` prop.

### Using translatins in components

Simply import `FormattedMessage` component and use ith with the right id prop, which will retrieve the corresponding string from translation file based on locale.

```
import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th><FormattedMessage id="myApp.components.Table.TableHeader.image"/></th>
                    <th><FormattedMessage id="myApp.components.Table.TableHeader.name"/></th>
                    <th><FormattedMessage id="myApp.components.Table.TableHeader.price"/></th>
                    <th><FormattedMessage id="myApp.components.Table.TableHeader.description"/></th>
                </tr>
            </thead>);
    }
}
```

### Handling language change

In order to change the language, locale value should be held in a state variable and should be changed via `setState()`. Since `index.js` does not have a state, we create a class that extends `IntlProvider` and has a state inside. Here `locale` and `messages` props can be bound to state variables and an be changed within `IntlProviderWrapper` class.
```
class IntlProviderWrapper extends React.Component {
  state = {
    locale: 'en'
  }

  changeLanguage = ()=> {
    this.setState({locale: this.state.locale === 'en' ? 'tr' : 'en'})
  }
  render() {
    const { locale } = this.state;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div>
          {this.props.children}
          <button className="btn-lang" onClick={this.changeLanguage}>{this.state.locale === 'en' ? 'TR' : 'EN'}</button>
        </div>
      </IntlProvider>);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <IntlProviderWrapper>
      <App />
    </IntlProviderWrapper>
  </Provider>,
  document.getElementById('root')
)
```