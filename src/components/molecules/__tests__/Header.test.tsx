import { render, screen } from '@testing-library/react';

import Header from '@components/molecules/Header';

import { BrowserRouter } from "react-router";

describe('Header component', () => {
  describe('Given there is hitories listed', () => {
    describe('When component is mounted', () => {
      test('then it renders a list', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);

        const navItems = screen.getAllByRole('listitem');
        expect(navItems).toHaveLength(3);
      });
    });
  });
});
