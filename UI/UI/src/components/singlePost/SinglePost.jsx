import { deletePost } from "../../endpoint";
import "./singlePost.css";

export default function SinglePost({ post: { _id, name, title, text, creationDate }, setUpdating }) {
  const postDate = new Date(creationDate);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://post.healthline.com/wp-content/uploads/2020/09/tomatoes-1200x628-facebook-1200x628.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={() => setUpdating(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={() => deletePost(_id)}></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {name}
            </b>
          </span>
          <span>{`${postDate.toDateString()}, ${postDate.getHours()}:${postDate.getMinutes()}`}</span>
        </div>
        <p className="singlePostDesc">
          {text}
        </p>
      </div>
    </div>
  );
}
