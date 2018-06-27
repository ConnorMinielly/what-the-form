<p align="center">
  <br /><br />
  <img src="./src/resources/logo.svg" alt="WTF" height="150" />
  <br /><br />
</p>

# What The Form?

A Form generator for sematic-ui forms that uses tagged templates to allow one to directly and clearly define simple to moderately complex forms.

This project is currently in a theoretical stage, there is a verifiable problem with doing forms in React, but we can't be sure this is the solution without plenty of feed back and development! Please, get involved if you think this makes sense!

# Why The Form?

We created WTF to address the fact that writing even simple forms in react made us want to swear. Like a lot. All the time. We sat there staring at a big verbose ugly section of JSX and said "What the fuck..." because sometimes those things are ugly as sin. Using a project like semantic UI abstracted a lot of that struggle as far as the visual composition of the forms went, but it still seemed like it should just be easier. Sometimes all you want is a contacts form and you have to pump out about 50-60 lines to put everything in place. We decided to create a tool that would allow us to use a JSON-like syntax to define a form and do everything else for us with a single component in out JSX tree, and WTF is that tool.

## Why a Tagged Template instead of just strait up JSON?

This is probably gonna be a controversial portion of this project, using a tagged template to generate a form component instead of simply passing a JSON string/object to a function. The reason we've gone the tag direction is that...it's cooler. At the initial point of development it was just something we wanted to try because we love styled-components and wanted to understand how something like that works. We've kept the tags for a couple good reasons though:

1.  JSON doesn't allow for repeated key names, but we've used the keys to define the field type. using a tagged string allows us to bend the rules of standard JSON but keep the syntax.
2.  We are able to insert functions for various processes like field validation into the "JSON" using `key: ${functionName}`
3.  The tag syntax is clear and succinct, it's nicer to look at and nicer to write and leaves to door open to larger changes to the form definition syntax.
4.  We can create IDE extensions to provide code highlighting and auto-complete suggestions.

# How The Form?

this isn't a npm package yet because we're scrubs and we're still learning how to do that kinda stuff, but here's how it works in the code base so far:

```javascript
import React, { Component } from 'react';
import wtf from '../builder/wtfFormBuilder'; // This will change.

// This'll all change too!

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

// Create the form component
const WtfForm = wtf`
  What-The-Form Test!
  ${{
    type: 'group',
    children: [
      { type: 'short', placeholder: 'Test...' },
      { type: 'short', placeholder: 'Test...' },
    ],
  }}
  ${{ type: 'long', placeholder: 'Hello World! What The Form?' }}
  ${{ type: 'button', text: 'test' }}
  ${{ type: 'check', label: 'Watch your language' }}
  ${{ type: 'drop', placeholder: 'select...', options }}
`;

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
