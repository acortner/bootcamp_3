import React, { useEffect, useState } from 'react';
import { Card } from "rbx";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData({"0": {"name": "Khalid", "art": "khalid.png", "comps": [{"name": "Anderson Paak", "pic": "Anderson_Paak.jpg"}, {"name": "Anderson Paak", "pic": "Anderson_Paak.jpg"}, {"name": "Anderson Paak", "pic": "Anderson_Paak.jpg"}], "description": "This can be any string of text, as long as it stays in quotes.", "match_index": 35}});
  }, []);
  const artists = Object.values(data);
  return (
    <div className="App">
      <h1 id="banner">Local artists you may like...</h1>
      <div className="gallery_container">
        <div class="artist_container">
          {artists.map(artist => <ArtistCard artist={artist}/>)}
        </div>
        <div class="arrows">
          <FontAwesomeIcon icon={faChevronLeft} className="icon" id="left_arrow"/>
          <FontAwesomeIcon icon={faChevronRight} className="icon" id="right_arrow"/>
        </div>
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
        <div id="play_btn">
          <FontAwesomeIcon icon={faPlayCircle} className="far icon" id="play_btn_icon"/>
          </div>
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
