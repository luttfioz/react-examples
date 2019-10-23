# Styling with LESS in ReactJS

**Less: Leaner Style Sheets**

http://lesscss.org/

Less (which stands for Leaner Style Sheets) is a backwards-compatible language extension for CSS. Because Less looks just like CSS, learning it is easy. Less only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so quickly.

Features

* Less is clean, compact, more readable code and
written in a well organized way.

* Language extensions such as variables, nesting,
and mixins.

* Faster and easier.

* Capable enough to sort out the problem of code
redundancy

This tutorial covers the new useful features that are introduces with LESS preprocessor:

1. [Getting Started](#getting-started)
2. [Variables](#variables)
3. [Importing](#importing)
4. [Mixins](#mixins)
5. [Nesting](#nesting)
6. [Nesting At-Rules](#nesting-at-rules)
7. [Operations](#operations)
8. [Comments](#comments)
9. [Conclusion](#conclusion)

<a name="getting-started"/>

## Getting Started

The directory contains two folders named **setup** and **solution**:

* **setup** - is the directory where you should start working on. It contains a LESS-integrated ReactJS project with no styles applied at all. You are expected to add the styles through the tutorial.

* **solution** - contains the completed version of the project.

Run `npm run start` to launch the project on localhost. You'll be able to see the output at http://localhost:3000/ in your browser.

The project includes an `app.less` file inside `/src` directory. This is the place where you should add styles. As defined in `package.json`, styles in this file are automatically compiled to css. Since less files are compiled to css files, you should import css files.

Open `app.less` and add the following class:

```
.text-center {
    text-align: center;
}
```

Now import the style in `App.js` and use it:

```
import './app.css';
...
<h1 className="text-center">Products</h1>
```

<a name="variables"/>

## Variables

LESS lets you define variables that you can reuse throughout the app. Create the following theme files to keep the common theme variables.
```
theme
├── colors.less
└── dimens.less
```

Adding and using a variable is done with `@` character. Add the following variable definitions to colors:

```
@primary-dark: #111111;
@primary-light: #DDDDDD;
@light-gray: #EEEEEE;
@background-gray: #F9F9F9;
@white: #FFFFFF;
```


<a name="importing"/>

## Importing

Importing works pretty much as expected. You can import a `.less` file, and all the variables in it will be available. The extension is optionally specified for `.less` files.

You can import use the colors in `app.less`:

```
@import './theme/colors.less';

h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: @primary-dark;
}
```

<a name="mixins"/>

## Mixins

Mixins are a way of including a bunch of properties from one rule-set into another rule-set. So say we have the following class:

```
.bordered {
    border: 1px solid @primary-light;
    border-radius: 2px;
    border-spacing: 0;
}
```

You can just call this in another style:

```
table {
    .bordered();
}
```

<a name="nesting"/>

## Nesting

Less gives you the ability to use nesting instead of, or in combination with cascading. Let's say we have the following CSS:

```
th {
    font-family: 'Open Sans', sans-serif;
    color: @primary-dark;
}

th img{
    .bordered();
}

tbody th {
    font-weight: 300;
}

tbody tr:nth-child(odd){
    background-color: @light-gray;
}

```

You can nest `img` within `th` as follows:

```
th {
    font-family: 'Open Sans', sans-serif;
    color: @primary-dark;
    padding: 16px;
    img {
        .bordered();
    }
}

tbody {
    th {
        font-weight: 300;
    }
    tr:nth-child(odd){
        background-color: @light-gray;
    }
}
```

<a name="nesting-at-rules"/>

## Nesting At-Rules

At-rules such as `@media` or `@supports` can be nested in the same way as selectors. The at-rule is placed on top and relative order against other elements inside the same ruleset remains unchanged. This is called bubbling.

Add the following style rule:

```
tr {
    background-color: @white;
    th:nth-child(1){
        @media (min-width: 768px) {
            display: block
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
}
```

It's the same as the following rule:

```
tr {
    background-color: @white;
}

@media (min-width: 768px) {
    tr th:nth-child(1){
        display: block;
    }
}

@media (max-width: 768px) {
    tr th:nth-child(1){
        display: none;
    }
}
```

<a name="operations"/>

## Operations

Arithmetical operations `+, -, *, /` can operate on any number, color or variable without needing to use `calc()` as in CSS. If it is possible, mathematical operations take units into account and convert numbers before adding, subtracting or comparing them. 

Create the following variable inside `dimens.less`:

```
@default-padding: 16px;
```

Import this in `app.less` and use it inside `th` style:

```
th {
    font-family: 'Open Sans', sans-serif;
    color: @primary-dark;
    padding: @default-padding;
    img {
        .bordered();
    }
}
```

You can also use this variable with an arithmetic expression as follows:

```
.App {
    padding: @default-padding * 2;
}
```

<a name="comments"/>

## Comments

Both block-style and inline comments may be used:

```
tr {
    background-color: @white;
    th:nth-child(1){
        // Show first column for large devices
        @media (min-width: 768px) {
            display: block;
        }
        /* Hide first column for large devices */
        @media (max-width: 768px) {
            display: none;
        }
    }
}
```

<a name="conclusion"/>

## Conclusion

For further information and advanced features, you can refer to the [complete documentation](http://lesscss.org/features/) of LESS



