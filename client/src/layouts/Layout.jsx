import './Layout.css'
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;

  return (
    <div>
      <header className="nav">
        <Link to="/" className="main_title">The Corner of Food</Link>
        <Link className="navBarLink" to='/posts'>All Places to Eat</Link>
        {currentUser ? (
          <div>
          <Link to='/posts/new'>Add a New Place</Link>

          </div>
        ) : (
            <div>
            <Link  className="navBarLink"  to='/login'>Login</Link>
            <Link className="navBarLink"  to='/register'>Register</Link>
</div>
        )}
        <hr />
        {currentUser && (
          <div>
            <p>Welcome, {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>

          </div>
        )}
        
       </header> 
      {children}
    </div>
  );
}
