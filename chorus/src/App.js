import React, { useEffect, useState } from 'react';
import { Card } from "rbx";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData({"0": {"name": "Khalid", "art": "khalid.png", "comps": [{"name": "Anderson Paak", "pic": "Anderson_Paak.jpg"}, {"name": "Anderson Paak", "pic": "Anderson_Paak.jpg"}, {"name": "Anderson Paak", "pic": "Anderson_Paak.jpg"}], "description": "This can be any string of text, as long as it stays in quotes.", "match_index": 35}});
  }, []);
  const artists = Object.values(data);
  return (
    <div className="App">
      <h1 id="banner">Artists you may like...</h1>
      <div className="gallery_container">
        <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        <div class="artist_container">
          {artists.map(artist => <ArtistCard artist={artist}/>)}
        </div>
        <FontAwesomeIcon icon={faChevronRight} className="icon" />
      </div>
    </div>
  );
}

const ArtistCard = ({artist}) => {
  return (
    <div>
      <Card>
        <img id="artwork" src={"./data/images/" + artist.art}/>
        <h1 id="artist_name">{artist.name}</h1>
        <p id="play_btn">&#9658;</p>
        <h2 id="similar">Similar Artists</h2>
        <div class="related_artists">{artist.comps.map(comp => <ArtistComp comp={comp}/>)}</div>
      </Card>
    </div>
  )
}

const ArtistComp = ({comp}) => {
  return (
    <div class="comp_wrapper">
      <img id="comp_pic" src={"./data/images/" + comp.pic}/>
      <h3 id="comp_name">{comp.name}</h3>
    </div>
  )
}


export default App;
