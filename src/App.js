import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import postService from "./postService"
import PostForm from './components/PostForm';
import PostContainer from "./components/PostContainer"
import Posts from "./components/Posts"
import MenuBar from "./components/MenuBar"

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

    <div className="main">
      <Router>
        <MenuBar />
        <Route path="/posts" render={() => <Posts posts={posts} />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/create" render={() => <PostForm setPosts={setPosts} posts={posts} />} />
      </Router>
    </div>
  )
}

export default App;
