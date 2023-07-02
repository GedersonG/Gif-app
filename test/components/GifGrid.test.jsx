import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Testo to GifGrid component', () => {

    const category = 'Dragon Ball Z';

    test('should show the loading initially', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('should show items when load the images using useFetchGif', () => {
        const gifs = [{
            id: 'Id1',
            title: 'Gohan SSJ2',
            url: 'http://myuri.com/'
        },
        {
            id: 'Id2',
            title: 'Goku SSJ3',
            url: 'http://museconduri.com/'
        }];
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});