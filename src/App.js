import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import postService from "./postService"
import PostForm from './components/PostForm';
import PostContainer from "./components/PostContainer"

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
        <PostContainer key={p.id} url={p.url} />
      ))}{" "}

      <PostForm />
    </div>
  )
}

export default App;
