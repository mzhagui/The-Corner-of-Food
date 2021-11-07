import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOnePost } from '../services/posts';
import './PostDetail.css'
import Reviews from './Reviews';
import user from '../assets/user.png'
import StarRating from "./StarRating";


export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null)
  const [created, setCreated] = useState(false);
  const { id } = useParams()
  const { currentUser } = props
 
  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id, created]);

  return (
    <div className="h1-title">
      <div className="content-div">
        <div className="image-div">
        <img className="unique" src={postItem?.img_url} alt="uniquee" />
        </div>
      <div className="info-div">
      <h1 className="h1-desciption">{postItem?.title}</h1>
      <h3>{postItem?.address}</h3>
        <p className="food-description">{postItem?.food_description}</p>
        </div>
        </div>
      {currentUser ? <Reviews currentUser={currentUser} setCreated={setCreated} /> :  "" }
        <div className="all-reviews">
        <h1 className="review-h1">Reviews</h1>
        <br/>
        <div className="review-map">
        {postItem?.reviews.map((post) => (
          <div className="review-post" key={post.id}>
           <div className="user-info">
            <img className="img-user"src={user} />
              <p className="username">{post?.user.username}</p>
              <p className="date">Posted on {Date(post?.created_at).split('-')[0]}</p>

              </div>
<div className="rating-div">
              <span className="rating"> <StarRating rating={post?.rating}  /></span>
            </div>
            <div className="description-review">
            <p>{post?.description}</p>
</div>
        </div>
        ))}
          </div>
        </div>
      </div>
   
          
  )

}