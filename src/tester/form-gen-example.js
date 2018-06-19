import { wtf } from '../builder/wtfFormBuilder';

const options = [
  {
    text: 'Example 1',
    value: 1,
  },
  {
    text: 'Example 2',
    value: 2,
  },
];

export const InitialForm = wtf`
  ${{ type: 'long', placeholder: 'Hello World! What The Form?' }}
  ${{ type: 'button', text: 'test' }}
  ${{ type: 'check', label: 'Fuck off' }}
  ${{ type: 'drop', placeholder: 'select...', options: options }}
`;
