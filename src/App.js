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
      setPosts(postService.getAllPics())
    } catch {
      console.log("errno")
    }
  }, [])
  return (
    <div>
      <p>asd</p>
      <div>
        {" "}
        {posts.map(p => (
          <Image url={p.url} key={p.id} />
        ))}{" "}
      </div>
    </div>
  )
}

export default App;
