import { render, screen } from '@testing-library/react';
import AppHeader from '../components/app-header';

it('Renders top banner', () => {
  render(<AppHeader />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});
