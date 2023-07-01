import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

    const [categories, setCategories] = useState(['DBZ', 'Naruto']);

    const onAddCategory = () => {
        //categories.push('League of legends');
        setCategories( [...categories, 'League of Legends' ] )
    }

    return (
        <>
            {/* title */}
            <h1>Gif App</h1>

            {/* content */}
            <AddCategory />

            <button onClick={onAddCategory}>Add</button>
            <ol>
                {categories.map(category => {
                    return <li key = { category }>{ category }</li>

                })}
            </ol>
        </>
    );
}
