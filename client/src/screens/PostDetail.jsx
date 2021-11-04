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

  if(postItem?.reviews.length >1){
    <h5>{postItem?.reviews[0]?.rating}</h5>
   
     } else {
      <h5> "Be the first to write a review"</h5>
       }
 
  return (
    <div className = "h1-title">
      <img className="unique" src={postItem?.img_url} />
      <h1 >{postItem?.title}</h1>
      <p>{postItem?.address}</p>
      <h3>{postItem?.food_description}</h3>
      <div>
        <h1>Write a Review...</h1>
        <form>
        <textarea
        />
      <button>Submit</button>

      </form>
      {postItem?.reviews.length > 0 &&
        <h2>Reviews <br/>
          {postItem?.reviews[0]?.rating}
          {postItem?.user_id?.email}
          <br/>
          {postItem?.reviews[0].description}
        </h2>
      }
    </div>
     

      {/* <h4>Write a review ... </h4>
      <h5>{postItem?.reviews[0].rating}</h5>
      <h5>{postItem?.reviews[0].description}</h5> */}

    </div>
    
  )
}