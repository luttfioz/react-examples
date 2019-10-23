# Styling with SASS in ReactJS

**Sass: Syntactically Awesome Style Sheets**

https://sass-lang.com/

[Sass](https://sass-lang.com/documentation) is a backwards-compatible language extension for CSS. Because Sass looks just like CSS, learning it is easy. Sass only makes a few convenient additions to the CSS language, which is one of the reasons it can be learned so quickly. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.
Sass comes built-in with [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started). Not much configuration is needed.

Features

* Sass is clean, compact, more readable code and
written in a well organized way.

* Language extensions such as variables, nesting,
and mixins.

* Faster and easier.

* Capable enough to sort out the problem of code
redundancy

This tutorial covers the new useful features that are introduces with SASS preprocessor:

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

* **setup** - is the directory where you should start working on. It contains a SASS-integrated ReactJS project with no styles applied at all. You are expected to add the styles through the tutorial.

* **solution** - contains the completed version of the project.

Run `npm run start` to launch the project on localhost. You'll be able to see the output at http://localhost:3000/ in your browser.

You can rename `App.css` to `app.scss` and update `App.js` to import `app.scss`. This file and any other file will be automatically compiled if imported with the extension .scss or .sass.



Open `app.scss` and add the following class:

```
.text-center {
    text-align: center;
}
```

Now import the style in `App.js` and use it:

```
import './app.scss';
...
<h1 className="text-center">Products</h1>
```

<a name="variables"/>

## Variables

SASS lets you define variables that you can reuse throughout the app. Create the following theme files to keep the common theme variables.
```
theme
├── colors.scss
└── dimens.scss
```

Adding and using a variable is done with `$` character. Add the following variable definitions to colors:

```
$primary-dark: #111111;
$primary-light: #DDDDDD;
$light-gray: #EEEEEE;
$background-gray: #F9F9F9;
$white: #FFFFFF;
```

And create the following dimensions:
```
$default-padding: 16px;
$default-weight: 300;
```

<a name="importing"/>

## Importing

Importing works pretty much as expected. You can import a `.scss` file, and all the variables in it will be available. The extension is optionally specified for `.scss` files.

You can import use the colors in `app.scss`:

```
@import './theme/colors.scss';
@import './theme/dimens.scss';

h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: $default-weight;
    color: $primary-dark;
}
```

<a name="mixins"/>

## Mixins

Mixins are a way of including a bunch of properties from one rule-set into another rule-set. You can define a rule set with `@mixin` and use it with `@include`.  So say we have the following class:

```
@mixin bordered {
    border: 1px solid $primary-light;
    border-radius: 2px;
    border-spacing: 0;
}
```

You can just call this in another style:

```
table {
    @include bordered;
}
```

<a name="nesting"/>

## Nesting

Sass gives you the ability to use nesting instead of, or in combination with cascading. Let's say we have the following CSS:

```
th {
    font-family: 'Open Sans', sans-serif;
    color: $primary-dark;
    padding: $default-padding;
}

th img{
    @include bordered;
}

tbody th {
    font-weight: $default-weight;
}

tbody tr:nth-child(odd){
    background-color: $light-gray;
}

```

You can nest `img` within `th` as follows:

```
th {
    font-family: 'Open Sans', sans-serif;
    color: $primary-dark;
    padding: $default-padding;
    img {
        @include bordered;
    }
}

tbody {
    th {
        font-weight: $default-weight;
    }
    tr:nth-child(odd){
        background-color: $light-gray;
    }
}
```

<a name="nesting-at-rules"/>

## Nesting At-Rules

At-rules such as `@media` or `@supports` can be nested in the same way as selectors. The at-rule is placed on top and relative order against other elements inside the same ruleset remains unchanged. This is called bubbling.

Add the following style rule:

```
tr {
    background-color: $white;
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
    background-color: $white;
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

You can use a variable with an arithmetic expression as follows:

```
.App {
    padding: $default-padding * 2;
}

h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: $default-weight * 2;
    color: $primary-dark;
}
```

<a name="comments"/>

## Comments

Both block-style and inline comments may be used:

```
tr {
    background-color: $white;
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

For further information and advanced features, you can refer to the [complete documentation](https://sass-lang.com/documentation) of SASS



