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
  // const [reviews, setReviews] = useState({
  //   rating: "",
  //   description: "",
  //   post_id: id,
  //   user_id: currentUser.id
  // })

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id, created]);

  
  // const [isCreated, setCreated] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setReviews({
  //     ...reviews,
  //     [name]: value
  //   });
  // };
  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const created = await newReview(reviews)
  //   setCreated({ created })
  // }

  // if (isCreated) {
  //   return <Redirect to={`/posts/${id}`} />
  // }

  console.log(postItem)
  

  return (
    <div className="h1-title">
      <img className="unique" src={postItem?.img_url} alt="uniquee" />
      <h1 >{postItem?.title}</h1>
      <h3>{postItem?.address}</h3>
      <p className="food-description">{postItem?.food_description}</p>
      {currentUser ? <Reviews currentUser={currentUser} setCreated={setCreated} /> :  "" }
      {/* <div>
     
          <h1>Write a Review...</h1>
          <form onSubmit={handleSubmit}>
          <input
             type="number"
             min="0"
             max="5"
              className='input-number'
              placeholder='Rating'
              value={reviews.rating}
              name='rating'
              required
              autoFocus
              onChange={handleChange}
          />
          <br />
          <br/>
            <textarea className="input-review"
              placeholder='Why you love it?'
              value={reviews.description}
              name='description'
              required
              autoFocus
              onChange={handleChange}>
          </textarea>
          <br/>
            <button className="review-button">Submit Review</button>
          </form>
       */}
        <div className="all-reviews">
        <h1>Reviews</h1>
        <br/>
        <div className="review-map">
        {postItem?.reviews.map((post) => (
          <div className="review-post" key={post.id}>
            <img src={user} />
            <p>User {post?.user.username}</p>
            <p>Posted on {Date(post?.created_at).split('-')[0]}</p>

            <h3 className="rating">Rating <StarRating rating ={post?.rating} /></h3>
            <p>{post?.description}</p>

        </div>
        ))}
          </div>
        </div>
      </div>
   
          
  )

}