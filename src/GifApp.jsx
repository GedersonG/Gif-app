import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {

    const [categories, setCategories] = useState(['DBZ', 'Naruto']);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;

        setCategories([value, ...categories])
    }

    return (
        <>
            <h1>Gif App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category}
                    />)
            }
        </>
    );
}
