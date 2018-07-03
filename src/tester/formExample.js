import wtf from '../builder/wtfFormBuilder';

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

const InitialForm = wtf(
  {
    header: 'What the Form?',
    group: { inputLine1: { placeholder: 'Test...' }, inputLine2: { placeholder: 'Test...' } },
    inputArea1: { placeholder: 'example example', name: 'firstName' },
    inputArea2: { placeholder: 'Hello World! What The Form?', name: 'lastName' },
    button: { text: 'test' },
    checkbox: { label: 'Watch your language', name: 'isDead' },
    select: { placeholder: 'select...', options, name: 'select' },
  },
  submitHandler,
);

export default InitialForm;
