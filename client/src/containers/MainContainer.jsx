import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import profile from "../assets/profile.png"

import { deletePost, getAllPosts, newPost } from '../services/posts';
import Posts from '../screens/Posts';
import PostCreate from '../screens/PostCreate';
import PostDetail from '../screens/PostDetail';

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  const history = useHistory()
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

  const handlePostCreate = async (formData) => {
    const newPost = await newPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push('/posts');
  };

  return (
    <div>
       <img className="background_pic" src={profile} />
        <Link to="/posts" >Take Me There</Link>
    <Switch>
      <Route exact path='/posts'>
        <Posts posts={posts} handlePostDelete={handlePostDelete} />
      </Route>
        <Route exact path='/posts/:id'>
          <PostDetail/>
        </Route>
        <Route exact path='/posts/new'>
          <PostCreate handlePostCreate={handlePostCreate}/>
        </Route>
      </Switch>
      </div>
    
  );
}
    
