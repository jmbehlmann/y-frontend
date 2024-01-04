import axios from "axios";
import {PostsIndex} from "./PostsIndex";
import {useState, useEffect} from 'react';
import {PostsNew} from "./PostsNew";


export function Content() {
  const [posts, setPosts] = useState([]);
  
  
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

  useEffect(handleIndexPosts, [])

  return (
    <div>
      <PostsNew onCreatePost={handlePostCreate} />
      <PostsIndex posts={posts} />
    </div>
  );
}
