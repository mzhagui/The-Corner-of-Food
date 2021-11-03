import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOnePost } from '../services/posts';
import './PostDetail.css'


export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null)
  const { id } = useParams()
  

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);
console.log(postItem)
  return (
    <div>
      <img className="unique" src={postItem?.img_url} />
      <h1>{postItem?.title}</h1>
      <p>{postItem?.address}</p>
      <h2>{postItem?.food_description}</h2>
      <h4>Write a review ... </h4>
      <h5>{postItem?.reviews[0].rating}</h5>
      <h5>{postItem?.reviews[0].description}</h5>

    </div>
    
  )
}