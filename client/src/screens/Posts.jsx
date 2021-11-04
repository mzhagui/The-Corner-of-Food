 import { useState, useEffect } from 'react';
 import {  useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { deletePost, getAllPosts } from '../services/posts';
import './Posts.css'

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, []);
  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };
  
  return (
    <div>
    <h3>Places to Eat</h3>

    <div className="post_container">
      
      {posts.map((post) => (
        <div className="posts"key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <img className="unique"src={post.img_url}/>
            <p>{post.title}</p>
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <button>edit</button>
          </Link>
          <button onClick={()=> console.log(posts)}> </button>
          <button onClick={() => handlePostDelete(post.id)}>delete</button>
        </div>
      ))}
    
      </div>
      </div>
  );
}
