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
      postService.getAllPics().then(s => setPosts(s.data))
    } catch {
      console.log("errno")
    }
  }, [setPosts])

  return (
    <div>
      {" "}
      {posts.map(p => (
        <Image key={p.id} url={p.url} />
      ))}{" "}
    </div>
  )
}

export default App;
