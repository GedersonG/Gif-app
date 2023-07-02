import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['DBZ', 'Naruto']);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;

        setCategories([...categories, value])
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
