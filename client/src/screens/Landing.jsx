import { Link } from 'react-router-dom';
import profile from "../assets/profile.png"

export default function Landing() {
  return (
    <div>
      <div>
        <img className="background_pic" src={profile} />
        <Link to="/posts" >Take Me There</Link>
      </div>
    </div>
  )
}
