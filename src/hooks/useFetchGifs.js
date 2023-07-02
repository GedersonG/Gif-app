import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGif";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    useEffect(() => {
        getGif(category)
            .then((newGif) => {
                setGifs(newGif);
                setIsLoading(false);
        });
    }, [])

    return {
        gifs,
        isLoading
    }
}