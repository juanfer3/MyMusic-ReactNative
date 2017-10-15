const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json'

function  getArtists(){
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist=>{
       return{
         name: artist.name,
         imagen: artist.image[3]['#text'],
         like: 200,
         comment:150
       }
    })).catch((error) => {
        console.error(error);
      });

}

export { getArtists }
