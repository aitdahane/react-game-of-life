import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
  test('Render ', () => {
    render(<Title />);
    
    expect(screen.getByRole('heading')).toHaveTextContent('Game Of Life')
  });
});
