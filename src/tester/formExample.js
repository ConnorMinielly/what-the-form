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
/*export const InitialForm = wtf`
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
`;*/

/* TODO: assess if this project would be better served by using a
json format? NOTE: Json doesn't like duplicate keys. */

// eslint-disable-next-line
export const InitialForm = wtf({
  group: { short1: { placeholder: 'Test...' }, short2: { placeholder: 'Test...' } },
  long1: { placeholder: 'example example' },
  long2: { placeholder: 'Hello World! What The Form?' },
  button: { type: 'button', text: 'test' },
  check: { label: 'Watch your language' },
  drop: { placeholder: 'select...', options },
});
