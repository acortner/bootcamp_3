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
      <AlbumPanel/>
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
        <img id="artwork" src={"./data/images/" + artist.art} alt=""/>
        <div id="artist_name"><h1 id="artist_name_text">{artist.name}</h1></div>
        <div id="play_btn">
          <FontAwesomeIcon icon={faPlayCircle} className="icon" id="play_btn_icon"/>
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
      <img id="comp_pic" src={"./data/images/" + comp.pic} alt=""/>
      <h3 id="comp_name">{comp.name}</h3>
    </div>
  )
}

const AlbumPanel = () => {
  return (
    <div class="album_grid">
      <img class="album_img" src="./data/images/Anderson_Paak.jpg" alt=""/>
      <img class="album_img" src="./data/images/Beyonce.jpg" alt=""/>
      <img class="album_img" src="./data/images/Chance_The_Rapper.jpg" alt=""/>
      <img class="album_img" src="./data/images/Ed_Sheeran.jpg" alt=""/>
      <img class="album_img" src="./data/images/Ella_Mai.jpg" alt=""/>
      <img class="album_img" src="./data/images/Maggie_Rogers.jpg" alt=""/>
      <img class="album_img" src="./data/images/Frankie_Cosmos.jpg" alt=""/>
      <img class="album_img" src="./data/images/Grapetooth.jpg" alt=""/>
      <img class="album_img" src="./data/images/Japanese_Breakfast.jpg" alt=""/>
      <img class="album_img" src="./data/images/khalid.png" alt=""/>
      <img class="album_img" src="./data/images/Lala_Lala_album_art.jpg" alt=""/>
      <img class="album_img" src="./data/images/Lana_Del_Ray.jpg" alt=""/>
      <img class="album_img" src="./data/images/Mitski.jpg" alt=""/>
      <img class="album_img" src="./data/images/Swae_Lee.jpg" alt=""/>
      <img class="album_img" src="./data/images/SZA.jpg" alt=""/>
      <img class="album_img" src="./data/images/Tasha_album_art.jpg" alt=""/>
      <img class="album_img" src="./data/images/Anderson_Paak.jpg" alt=""/>
      <img class="album_img" src="./data/images/Beyonce.jpg" alt=""/>
      <img class="album_img" src="./data/images/Chance_The_Rapper.jpg" alt=""/>
      <img class="album_img" src="./data/images/Ed_Sheeran.jpg" alt=""/>
    </div>
  )
}


export default App;
