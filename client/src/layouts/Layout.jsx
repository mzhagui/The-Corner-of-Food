import './Layout.css'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;

  return (
    <div>
      <header className="nav">
        <Link to="/" className="main_title">The Corner of Food</Link>
        <Link to='/posts'>All Places to Eat</Link>
        {currentUser ? (
          <div>
            <p>Welcome, {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
            <div>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
</div>
        )}
        <hr />
        {currentUser && (
          <div>
            <Link to='/posts/new'>Add a New Place</Link>
          </div>
        )}
        
       </header> 
      {children}
    </div>
  );
}
