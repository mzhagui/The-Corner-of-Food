import { useState } from "react";
import { newPost } from "../services/posts";
import { Redirect } from "react-router";
import './PostCreate.css'

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
      <h1 className="create-title">Create Food Post</h1>
      <input
          className='input-title'
          placeholder='Title'
          value={posts.title}
          name='title'
          required
          autoFocus
        onChange={handleChange}
      />
      <br />

      <input
          className='input-title'
          placeholder='Address'
          value={posts.address}
          name='address'
          required
        onChange={handleChange}
      />
      <br/>
      <textarea type="text"
          className='input-description'
          placeholder='Description'
          value={posts.food_description}
          name='food_description'
          required
          onChange={handleChange}>
      </textarea>
            <br/>
      <input
          className='input-title'
          placeholder='Image URL'
          value={posts.img_url}
          name='img_url'
          required
          onChange={handleChange}
        />
      <br />
      <button className="create-button">Submit</button>
    </form>
  )
}
