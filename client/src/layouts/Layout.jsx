import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { children, currentUser, handleLogout } = props;

  return (
    <div>
      <header>
      <h1>The Corner of Food</h1>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
       <Link to='/login'>Login/Register</Link>
        )}
        <hr />
        {currentUser && (
          <div>
            <Link to='/posts'>Posts</Link>
            <Link to='/reviews'>Reviews</Link>
          </div>
        )} 
       </header> 
       {children}
    </div>
  );
}
