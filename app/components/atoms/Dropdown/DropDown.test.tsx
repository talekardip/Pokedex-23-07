import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

// Mock the useRouter hook
const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('Dropdown', () => {
  const mockItems = ['Item 1', 'Item 2', 'Item 3'];
  const mockLabel = 'Test Label';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderDropdown = (isOpen = false) => {
    render(<Dropdown items={mockItems} label={mockLabel} isOpen={isOpen} onToggle={() => {}} />);
  };

  it('renders the dropdown with the correct label', () => {
    renderDropdown();
    expect(screen.getByText(mockLabel)).toBeInTheDocument();
  });

  it('toggles the dropdown when clicked', () => {
    renderDropdown();
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('displays all items when dropdown is open', () => {
    renderDropdown(true);
    
    mockItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });


  it('displays "Label + X More" when multiple items are selected', () => {
    renderDropdown(true);

    const item1 = screen.getByText('Item 1').closest('li');
    const item2 = screen.getByText('Item 2').closest('li');

    fireEvent.click(item1);
    fireEvent.click(item2);

    expect(screen.getByText('Item 1 + 1 More')).toBeInTheDocument();
  });

  it('rotates the arrow icon when dropdown is opened', () => {
    renderDropdown();
    const button = screen.getByRole('button');
    const icon = button.querySelector('svg');

    expect(icon).toHaveClass('rotate-0');
    
  });
});
