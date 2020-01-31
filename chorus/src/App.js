import React, { useEffect, useState } from 'react';
import { Message, Card } from "rbx";
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData({"0": {"name": "Khalid", "art": "khalid.png", "comps": ["NONAME", "Daniel Caesar", "Frank Ocean"], "comps_img": ["img1.jpg", "img2.jpg", "img3.jpg"],"description": "This can be any string of text, as long as it stays in quotes.", "match_index": 35}});
  })
  const artists = Object.values(data);
  return (
    <div className="App">
      <h1 id="banner">Artists you may like...</h1>
      <div class="artist_container">
        {artists.map(artist => <ArtistCard artist={artist}/>)}
      </div>
    </div>
  );
}

const ArtistCard = ({artist}) => {
  return (
    <div>
      <Card>
        <img id="artwork" src={"./data/images/" + artist.art}/>
        <div id="album_container">
          <h1 id="artist_name">{artist.name}</h1>
          <p id="play_btn">&#9658;</p>
          
        </div>
      </Card>
    </div>
  )
}

export default App;
