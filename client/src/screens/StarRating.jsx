 import { FaStar } from "react-icons/fa";

export default function StarRating(props) {
  const { rating } = props
  return (
    <div className="starrating">
      {[...Array(rating)].map(( star,index) => {
      return (
          <div key={index}>
          <FaStar/>
            </div>
            )
       })}
          </div>
        )
}
