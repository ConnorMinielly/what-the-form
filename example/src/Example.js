import wtf from 'what-the-form';

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

const submitHandler = state => {
  console.log(state);
};

const WtfForm = wtf(
  {
    header: 'What the Form?',
    group: {
      inputLine1: { placeholder: 'First Name...', name: 'firstName' },
      inputLine2: { placeholder: 'Last Name...', name: 'lastName' },
    },
    inputArea1: {
      placeholder: 'Give Me Your Life Story...',
      name: 'lifeStory',
    },
    inputArea2: { placeholder: 'What The Form?', name: 'randomStuff' },
    checkbox: { label: 'Checked?', name: 'isChecked' },
    select: {
      placeholder: 'Select Example...',
      options,
      name: 'selectExample',
    },
    button: { text: 'Submit' },
  },
  submitHandler,
);

export default WtfForm;
