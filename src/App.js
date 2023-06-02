
import './App.css';
import React from 'react';
import Tile from './components/Tile.jsx'; 
import { v4 as uuidv4 } from 'uuid';
import curiosity from './data/curiosity.json';

function App() { 
  console.log("render");

  const [data, setData] = React.useState(curiosity);

  console.log(setData);

  const randomNumArr = [];
  for(let step = 0; step < 8; step++) {
    randomNumArr.push(Math.floor(Math.random() * 800));
  }

  const pictureUrls = [];
  randomNumArr.forEach(number => {
    pictureUrls.push(data.photos[number]);
    pictureUrls.push(data.photos[number]);
   });
  
  //Fisher-Yates Shuffle
  const shuffleArray = array => {
    for (let i = array.length -1 ; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
     array[i] = array[j];
   array[j] = temp;
    }
  }

  shuffleArray(pictureUrls);

  const pictureList = pictureUrls.map(value => <Tile photo={value} key={uuidv4()}/>)  
  // console.log(pictureList);

  return (
    <div className="App"> 
        <h1>Grüße vom Mars</h1> 
          <div className="card-container">        
            {pictureList}       
          </div>
    </div>
  ); 
}   

export default App;
   