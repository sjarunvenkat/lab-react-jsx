import React from 'react'
import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

function App() {
  // code here
  return (
    <>
    <h1 className='heading'>Kalvium Gallery</h1>
    <div className="App">
    {imageData().map((img) => (
      <div key={img.id}>
        <img src={img.img} alt="elephant" />
      </div>
    ))}
  </div>
  </>
    
  );
}

export default App;
