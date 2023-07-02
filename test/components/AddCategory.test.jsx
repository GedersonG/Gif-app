import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Testo to Add Category component', () => {

    const inputValue = 'Veggeta';
    const onNewCategory = jest.fn();

    test('should switch the value of the textbox', () => {

        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);
    });

    test('should call onNewCategory, if the input has any value', () => {
        
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('should not call onNewCategory if input value its empty', () => { 

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})