import { Link } from 'react-router-dom';
import profile from "../assets/profile.png"
import './MainContainer.css'



export default function MainContainer() {
  return (
    <div className="button_container"> 
       <img className="background_pic" src={profile} alt="background"/>
      <Link className="link-a" to="/posts" >Take Me There</Link>
 
    
   </div>
    
  );
}
    
