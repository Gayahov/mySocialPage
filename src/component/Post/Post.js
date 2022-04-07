import AddComment from '../AddComment/AddComment';
import './Post.css'


function Post({ title, body }) {
    return (
      <div className="posts-div ">
        <h3>{title}</h3>
        <p>{body}</p>
        <AddComment/>
      </div>
    );
  }
  export default Post;