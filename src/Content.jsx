import axios from "axios";
import {useState, useEffect} from 'react';
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { About } from "./About";
import { Routes, Route  } from "react-router-dom";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log('in handle index posts');
    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data)
      setPosts(response.data)
    })
  }

  const handlePostCreate = (params) => {
    console.log('handling Posts create')
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      setPosts([...posts, response.data])
    })
  }

  const handleShowPost = (post) => {
    console.log("handleShowPost");
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  }

  const handleUpdatePost = (id, params, successCallback) => {
    console.log("handleUpdatePost", params);
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyPost = (post) => {
    console.log("handleDestroyPost", post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleClose();
    });
  };


  useEffect(handleIndexPosts, [])

  return (
    <div>
      <Routes>
        <Route path="/about" element ={<About />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/signup" element ={<Signup />} />
        <Route path="/postnew" element ={<PostsNew />} />
        <Route path="/" element ={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
      </Routes>
      {/* <Signup /> */}
      {/* <Login /> */}
      <LogoutLink />
      {/* <PostsNew onCreatePost={handlePostCreate} /> */}
      {/* <PostsIndex posts={posts} onShowPost={handleShowPost} /> */}
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
