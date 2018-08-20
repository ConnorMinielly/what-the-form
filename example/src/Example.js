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
      textLine1: { placeholder: 'First Name...', name: 'firstName' },
      textLine2: { placeholder: 'Last Name...', name: 'lastName' },
    },
    textArea1: {
      placeholder: 'Give Me Your Life Story...',
      name: 'lifeStory',
    },
    textArea2: { placeholder: 'What The Form?', name: 'randomStuff' },
    checkbox: { label: 'Checked?', name: 'isChecked' },
    select: {
      placeholder: 'Select Example...',
      options,
      name: 'selectExample',
    },
    phone: { validation: /[0-9]{10,11}/g, name: 'testPhone' },
    button: { text: 'Submit' },
  },
  submitHandler,
);

export default WtfForm;
