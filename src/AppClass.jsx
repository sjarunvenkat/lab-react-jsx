import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
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

  // code here
  render(){
    return(
      <>
      <h1 className="heading">Kalvium Gallery</h1>
      <div className="App">
        {this.imageData().map((img)=>(
          <div key={img.id}>
            <img src={img.img} alt="elephant" />
          </div>
        ))}
      </div>
      </>
    )
  }
}