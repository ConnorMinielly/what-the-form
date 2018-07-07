<p align="center">
  <br /><br />
  <img src="./resources/wtf-logo.svg" alt="WTF" height="150" />
  <br /><br />
</p>

# What The Form?

> Form Generator For Sematic-UI React Forms

![with-coffee](https://img.shields.io/badge/made%20with-%E2%98%95%EF%B8%8F%20coffee-yellow.svg)
[![with-love](https://img.shields.io/badge/made%20with-%F0%9F%92%8C-red.svg)](http://www.neopets.com/) [![NPM](https://img.shields.io/npm/v/what-the-form.svg)](https://www.npmjs.com/package/what-the-form) [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

A Form generator for sematic-ui forms that allows one to directly and clearly define simple to moderately complex forms.

This project is currently in a theoretical stage, there is a verifiable problem with doing forms in React, but we can't be sure this is the solution without plenty of feed back and development! Please, get involved if you think this makes sense!

## Why The Form?

We created WTF to address the fact that writing even simple forms in react made us want to swear. Like a lot. All the time. We sat there staring at a big verbose ugly section of JSX and said "Whaaat the fuck..." because sometimes those things are ugly as sin. Using a project like semantic UI abstracted a lot of that struggle as far as the visual composition of the forms went, but it still seemed like it should just be easier. Sometimes all you want is a contacts form and you have to pump out about 50-60 lines to put everything in place. We decided to create a tool that would allow us to use a JSON-like syntax to define a form and do everything else for us with a single component in our JSX tree, and WTF is that tool.

## Where the Form? (Install)

```bash
npm install what-the-form

OR

yarn add what-the-form
```

## How The Form?

It's pretty simple so far, check it:

```javascript
import React, { Component } from 'react';
import wtf from 'what-the-form';

// define an array of options for the dropdown control.
const options = [
  {
    key: '1',
    text: 'Example 1',
    value: 1,
  },
  {
    key: '2',
    text: 'Example 2',
    value: 2,
  },
];


const submitHandler = (state) => {
  console.log(state);
};

// Create the form component
const WtfForm = wtf(
  {
    header: 'What the Form?',
    group: {
      inputLine1: { placeholder: 'First Name...', name: 'firstName' },
      inputLine2: { placeholder: 'Last Name...', name: 'lastName' },
    },
    inputArea1: { placeholder: 'Give Me Your Life Story...', name: 'lifeStory' },
    inputArea2: { placeholder: 'What The Form?', name: 'randomStuff' },
    checkbox: { label: 'Checked?', name: 'isChecked' },
    select: { placeholder: 'Select Example...', options, name: 'selectExample' },
    button: { text: 'Submit' },
  },
  submitHandler,
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <WtfForm /> <!-- The Form is rendered here -->
      </div>
    );
  }
}
```

## License

MIT © [Connor Minielly](https://github.com/ConnorMinielly)
