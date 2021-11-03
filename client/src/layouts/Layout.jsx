import './Layout.css'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;

  return (
    <div>
      <header>
        <Link to="/">The Corner of Food</Link>
        <Link to='/posts'>All Places to Eat</Link>
        {currentUser ? (
          <div>
            <p>Welcome, {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
       <Link to='/login'>Login/Register</Link>
        )}
        <hr />
        {currentUser && (
          <div>
            <Link to='/posts'>Posts</Link>
          </div>
        )}
        
       </header> 
      {children}
    </div>
  );
}
