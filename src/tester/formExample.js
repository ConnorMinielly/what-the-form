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

// eslint-disable-next-line
export const InitialForm = wtf({
  header: 'What the Form?',
  group: { short1: { placeholder: 'Test...' }, short2: { placeholder: 'Test...' } },
  long1: { placeholder: 'example example' },
  long2: { placeholder: 'Hello World! What The Form?' },
  button: { type: 'button', text: 'test' },
  check: { label: 'Watch your language' },
  drop: { placeholder: 'select...', options },
});
