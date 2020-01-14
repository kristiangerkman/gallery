import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Image from "./components/Image"
import postService from "./postService"

const App = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      console.log(postService.getAllPics());
    } catch {
      console.log("errno")
    }
  }, [])

  posts.map(p => console.log(p))
  return (
    <div>
      <p>asd</p>

    </div>
  )
}

export default App;
