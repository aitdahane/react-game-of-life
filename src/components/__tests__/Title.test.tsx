import { render, screen } from '@testing-library/react';
import Title from '../Title';

describe('Title', () => {
  it('should render the title', () => {
    render(<Title />);

    const titleElement = screen.getByText(/Game Of Life/i);
    
    expect(titleElement).toBeInTheDocument();
  });
});
