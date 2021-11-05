 import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deletePost, getAllPosts } from '../services/posts';
import './Posts.css'

export default function Posts(props) {
  const [posts, setPosts] = useState([]);
  const {currentUser} = props

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
    <h3 className="post_h3">Places to Eat</h3>

    <div className="post_container">

      {posts.map((post) => (
        <div className="posts"key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <img className="unique"src={post.img_url} alt="unique"/>
            <p>{post.title}</p>
          </Link>
          {currentUser?.id === post?.user_id ? <> <Link to={`/posts/${post.id}/edit`}><button>Edit</button></Link> 
          <button onClick={() => handlePostDelete(post.id)}>Delete</button> </>
            :""}

        </div>
      ))}
    
      </div>
      </div>
  );
}
