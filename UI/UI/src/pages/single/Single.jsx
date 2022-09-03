import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import Update from "../../components/update/Update";
import { getPostById } from "../../endpoint";
import "./single.css";


export default function Single({ id }) {
  const [post, setPost] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getPostById(window.location.href.split('/').pop(), setPost);
  }, [id]);
  
  return (
    <div className="single">
      {
        post
          ? updating
            ? <Update post={post} />
            : <SinglePost post={post} setUpdating={setUpdating} />
          : 'loading spinner...'
      }
      <Sidebar />
    </div>
  );
}
