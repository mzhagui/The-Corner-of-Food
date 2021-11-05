import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOnePost } from '../services/posts';
import './PostDetail.css'
import { newReview } from '../services/reviews';
import { Redirect } from 'react-router';


export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null)
  const [reviews, setReviews] = useState({
    rating: "",
    description:""
  })
  const { id } = useParams()
  

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);

  
  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviews({
      ...reviews,
      [name]:value
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await newReview(reviews)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/posts`} />
  }
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const reviewData = await newReview()
  //     setReviews(reviewData)
  //   }
  //   fetchReviews()
  // },[])
  // console.log(postItem)

  // if(postItem?.reviews.length >1){
  //   <h5>{postItem?.reviews[0]?.rating}</h5>
  //    } else {
  //     <h5> "Be the first to write a review"</h5>
  //      }
 
  return (
    <div className = "h1-title">
      <img className="unique" src={postItem?.img_url} />
      <h1 >{postItem?.title}</h1>
      <p>{postItem?.address}</p>
      <h3>{postItem?.food_description}</h3>
      <div>
        <h1>Write a Review...</h1>
        <form onSubmit={handleSubmit}>
        <input
          className='input-name'
          placeholder='Rating?'
          value={reviews.rating}
          name='rating'
          required
          autoFocus
          onChange={handleChange}
      />
        <input
          className='input-name'
          placeholder='Why you love it?'
          value={reviews.description}
          name='description'
          required
          autoFocus
          onChange={handleChange}
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
    </div>
    
  )
}