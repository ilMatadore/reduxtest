import { shallow} from 'enzyme';
import App from './App';

it('render App', () => {
  expect(shallow(<App />)).toMatchSnapshot();
})
