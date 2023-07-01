import { useState } from 'react';

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target } ) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
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
