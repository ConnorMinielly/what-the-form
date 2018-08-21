import { wtf, components as comps } from 'what-the-form';
import styled from 'styled-components';

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
      children: {
        firstName: { type: 'textLine', placeholder: 'First Name...' },
        middleName: { type: 'textLine', placeholder: 'Middle Name...' },
        LastName: { type: 'textLine', placeholder: 'Last Name...' },
      },
    },
    lifeStory: {
      type: 'textArea',
      placeholder: 'Give Me Your Life Story...',
    },
    randomStuff: { type: 'textArea', placeholder: 'What The Form?' },
    isChecked: { type: 'checkbox', label: 'Checked?' },
    newGroup: {
      type: 'group',
      children: {
        ners: { type: 'textArea', placeholder: 'What The Form?' },
      },
    },
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
