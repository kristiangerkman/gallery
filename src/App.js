import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Image from "./components/Image"
import postService from "./postService"

const App = (props) => {
  const [asd, setAsd] = useState([]);
  useEffect(() => {
    try {
      setAsd(postService.getAllPics())
    } catch {
      console.log("asd");
    }
  }, [])
  return (
    <div>
      {/* <p>{asd[0].id}</p> */}
      <Image url="https://i.imgur.com/lMHO0w1.jpeg" />
    </div>
  )
}

export default App;
