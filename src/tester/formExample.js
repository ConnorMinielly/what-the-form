import { wtf } from '../builder/wtfFormBuilder';

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

export const InitialForm = wtf`
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
  ${{ type: 'drop', placeholder: 'select...', options: options }}
`;
