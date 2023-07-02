import { getGif } from '../../src/helpers/GetGif';

describe('Test to getgif', () => { 
    
    const gifObject = {
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
    }

    test('should return a gif array', async() => { 

        const gifs = await getGif('South Park');
        
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual( gifObject );
    });

})