import { wtf } from '../parser/parser';

export const Form = wtf`
  ${{ type: 'long', text: 'Hello World! What The Form?' }}
  ${{ type: 'button', text: 'test' }}
`;
