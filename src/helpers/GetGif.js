export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Xqwg9jkn38or0y4LELxHJb99MQQFkMtf&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
