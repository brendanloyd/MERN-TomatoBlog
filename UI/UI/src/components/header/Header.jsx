import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Gardening with</span>
        <span className="headerTitleLg">Tomatoes</span>
      </div>
      <img
        className="headerImg"
        src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1000%2C645%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2019%2F07%2Ftomato-garden-2000.jpg"
        alt="tomato harvest"
      />
    </div>
  );
}
