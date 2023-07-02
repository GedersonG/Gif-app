import { render, screen, fireEvent } from '@testing-library/react';

import { GifItem } from "../../src/components/GifItem";

describe('Test to GifItem component', () => { 
    
    const title = 'This is a title';
    const url = 'https://myurl.com/';

    test('should take a snapshot to GifItem component', () => { 
        
        const { container } = render(
            <GifItem 
                title = { title }
                url = { url } 
            /> 
        );
        expect( container ).toMatchSnapshot();

     });

     test('should show the gif with its url', () => { 

        render(
            <GifItem 
                title = { title }
                url = { url } 
            /> 
        );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
     });

     test('should show the title in the component', () => { 

        render(
            <GifItem 
                title = { title }
                url = { url } 
            /> 
        );

        expect( screen.getByText( title )).toBeTruthy();

     });

 })