import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://st2.depositphotos.com/2109755/11967/i/950/depositphotos_119673360-stock-photo-an-lod-man-with-a.jpg"
          alt=""
        />
        <p>
          I started growing tomatoes only a year ago and got hooked.
          Gardening quickly became a passion of mine so I created this
          blog to share my expreiences throughout my journey. I hope
          this blog finds you well and ready to cultivate success!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
