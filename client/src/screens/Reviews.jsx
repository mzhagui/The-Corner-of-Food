import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOnePost } from '../services/posts';
import './PostDetail.css'
import { newReview } from '../services/reviews';


export default function Reviews(props) {
  const [postItem, setPostItem] = useState(null)
  const { id } = useParams()
  const { currentUser, setCreated } = props
  const [reviews, setReviews] = useState({
    rating: "",
    description: "",
    post_id: id,
    user_id: currentUser.id
  })

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviews({
      ...reviews,
      [name]: value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await newReview(reviews)
    setCreated( prevState => !prevState)
  }

  return (
   <div>
     
          <h1 className="write">Write a Review...</h1>
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
      
       
        </div>
     
          
  )

}