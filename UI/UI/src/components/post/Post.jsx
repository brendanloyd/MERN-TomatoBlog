import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post, img}) {
  const { _id, title, text, creationDate } = post;
  const postDate = new Date(creationDate);

  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to={`/post/${_id}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{`${postDate.toDateString()}, ${postDate.getHours()}:${postDate.getMinutes()}`}</span>
      </div>
      <p className="postDesc">
        {text}
      </p>
    </div>
  );
}
