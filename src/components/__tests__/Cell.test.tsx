import { render, screen, fireEvent } from '@testing-library/react';
import Cell from '../Cell';

describe('Cell', () => {
  const mockOnClick = jest.fn();

  const setup = ({ isAlive = false } = {}) => {
    render(
      <Cell
        isAlive={isAlive}
        onClick={mockOnClick}
        width={'20px'}
        height={'20px'}
      />
    );
    return screen.getByTestId('cell');
  };

  it('should render the cell', () => {
    const cellElement = setup();

    expect(cellElement).toBeInTheDocument();
    expect(cellElement).toHaveClass('Cell');
    expect(cellElement).not.toHaveClass('is-alive');
  });

  it('should render alive cell', () => {
    const cellElement = setup({ isAlive: true });

    expect(cellElement).toHaveClass('is-alive');
  });

  it('should handle on click event', () => {
    const cellElement = setup();

    fireEvent.click(cellElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
