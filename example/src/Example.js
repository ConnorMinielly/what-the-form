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

const submitHandler = (e, state) => {
  e.preventDefault();
  console.log(state);
};

const WtfForm = wtf(
  {
    header: 'What the Form?',
    nameGroup: {
      type: 'group',
      props: { className: 'new-name' },
      children: {
        firstName: { type: 'textLine', placeholder: 'First Name...' },
        LastName: { type: 'textLine', placeholder: 'Last Name...' },
      },
    },
    lifeStory: {
      type: 'textArea',
      placeholder: 'Give Me Your Life Story...',
    },
    randomStuff: { type: 'textArea', placeholder: 'What The Form?' },
    isChecked: { type: 'checkbox', label: 'Checked?' },
    selectExample: {
      type: 'select',
      placeholder: 'Select Example...',
      options,
    },
    testPhone: { type: 'phone', validation: /^[0-9]{0,11}$/g },
    submit: { type: 'button', text: 'Submit' },
  },
  submitHandler,
);

export default WtfForm;
