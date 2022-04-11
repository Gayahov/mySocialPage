import { Description } from "@mui/icons-material";
import AddComment from "../AddComment/AddComment";
import "./Post.css";

function Post({ img, firstName, createdAt, title, subTitle, description }) {
  return (
    <div className="posts-div ">
      <p>{firstName}</p>
      <p>{createdAt}</p>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h2>{subTitle}</h2>
      <p>{description}</p>

      <AddComment />
    </div>
  );
}
export default Post;
