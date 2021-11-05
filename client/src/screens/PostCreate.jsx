import { useState } from "react";
import { newPost } from "../services/posts";
import { Redirect } from "react-router";

export default function PostCreate(props) {
  const [posts,setPosts] = useState({
    title: '',
    address: '',
    food_description: '',
    img_url: ''
  })
  
  const [isCreated, setCreated] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPosts({
      ...posts,
      [name]:value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await newPost(posts)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/posts`} />
  }

  return (
     <form
      onSubmit={handleSubmit}>
      <h1>Create Food Post</h1>
      <input
          className='input-title'
          placeholder='Title'
          value={posts.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
      />
      <input
          className='input-name'
          placeholder='Address'
          value={posts.address}
          name='address'
          required
          autoFocus
          onChange={handleChange}
      />
      <input
          className='input-name'
          placeholder='Description'
          value={posts.food_description}
          name='food_description'
          required
          autoFocus
          onChange={handleChange}
      />
      <input
          className='input-name'
          placeholder='Image URL'
          value={posts.img_url}
          name='img_url'
          required
          autoFocus
          onChange={handleChange}
        />
      <br />
      <button>Submit</button>
    </form>
  )
}
