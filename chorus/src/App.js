import React, { useEffect, useState } from 'react';
import { Card } from "rbx";
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData({"0": {"name": "Khalid", "art": "images/img_name.jpg", "comps": ["NONAME", "Daniel Caesar", "Frank Ocean"], "comps_img": ["img1.jpg", "img2.jpg", "img3.jpg"],"description": "This can be any string of text, as long as it stays in quotes.", "match_index": 35}});
  })
  const artists = Object.values(data);
  return (
    <div className="App">
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
        <h1 id="name">{artist.name}</h1>
        <p id="play_button">&#9658;</p>
      </Card>
    </div>
  )
}

export default App;
