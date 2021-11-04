import { useState, useEffect } from "react";
import { getOnePost, putPost} from "../services/posts";
import { useParams, Redirect } from "react-router-dom";

export default function EditItem(props) {
  const [post, setPost] = useState({
    title: '',
    address: '',
    food_description: '',
    img_url: ''
  });
  const [isUpdated, setUpdated] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await putPost(id, post);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />;
  }
console.log(post)
  return (
    <div>
        <div className="editItem">
        <form
      onSubmit={handleSubmit}>
      <h1>Edit Post</h1>
      <input
          className='input-name'
          placeholder='Title'
          value={post.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
      />
      <input
          className='input-name'
          placeholder='Address'
          value={post.address}
          name='address'
          required
          autoFocus
          onChange={handleChange}
      />
      <input
          className='input-name'
          placeholder='Description'
          value={post.food_description}
          name='food_description'
          required
          autoFocus
          onChange={handleChange}
      />
      <input
          className='input-name'
          placeholder='Image URL'
          value={post.img_url}
          name='img_url'
          required
          autoFocus
          onChange={handleChange}
        />
      <br />
      <button>Save</button>
    </form>
        </div>
    </div>
  );
}
