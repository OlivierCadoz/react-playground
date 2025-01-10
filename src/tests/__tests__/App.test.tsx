import App from '@/App';
import { render } from '@testing-library/react';

describe('App', () => {
  describe('When App is rendered', () => {
    test('Then it should match snapshot', () => {
      const { container } = render(<App />);

      expect(container).toMatchSnapshot();
    });
  });
});
