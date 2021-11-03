import { Link } from 'react-router-dom';

export default function Posts(props) {
  const { posts, handlePostDelete } = props;
  return (
    <div>
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <img className="unique"src={post.img_url}/>
            <p>{post.title}</p>
          </Link>
          <Link to={`/posts/${post.id}/edit`}>
            <button>edit</button>
          </Link>
          <button onClick={() => handlePostDelete(post.id)}>delete</button>
        </div>
      ))}
      <Link to='/posts/new'>
        <button>Add a New Place</button>
      </Link>
    </div>
  );
}
