import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test to useFetchGifs customize hook', () => {
    const category = 'South Park';

    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of gifs ans isLoading in false', async() => {
        const { result } = renderHook(() => useFetchGifs(category));
        
        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );
        const { gifs, isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
