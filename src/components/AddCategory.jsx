import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target } ) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        if( value.length <= 1 ) return; // op.

        onNewCategory( value );
        setInputValue('');
    }

    return (
        <form onSubmit={ (e) => onSubmit(e) }>
            <input
            type="text"
            placeholder="Search gifs"
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>
    );
}
