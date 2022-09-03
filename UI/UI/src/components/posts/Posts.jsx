import Post from "../post/Post";
import "./posts.css";
import { useEffect, useState } from "react";
import { getPosts } from "../../endpoint";

export const images = [
  'https://www.freshpoint.com/wp-content/uploads/2018/08/tomatoes-heirloom-mix-freshpoint-produce.jpg',
  'https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2013/1/5/0/0000013c-0dd0-db6b-a5fe-5ff4ce7d0000.jpg.rend.hgtvcom.966.644.suffix/1452655445796.jpeg',
  'https://img1.10bestmedia.com/Images/Photos/379365/GettyImages-1138538479_54_990x660.jpg',
  'https://sandiegoseedcompany.com/wp-content/uploads/2021/02/shutterstock_705729763.jpg',
  'https://h2.commercev3.net/www.directgardening.com/images/400/72293.jpg'
]

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <div className="posts">
      {
        posts.map(post => {
          return <Post key={post._id} post={post} img={images[Math.floor((Math.random() * (images.length - 0)) + 0)]} />
        })
      }
    </div>
  );
}
