import { insertBlog } from "../../endpoint";
import "./write.css";
import { useState } from "react";

export default function Write({userName}) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleOnchange = (value, func) => {
    func(value);
  };

  const onSubmit = () => {
    setButtonDisabled(true);
    insertBlog(userName, title, text, setButtonDisabled);
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1333&h=667&url=https:%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F05%2F12%2Fthe-sl-blt-2000.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
            onChange={(event) => handleOnchange(event.target.value, setTitle)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            value={text}
            onChange={(event) => handleOnchange(event.target.value, setText)}
          />
        </div>
        <button className="writeSubmit" type="button" onClick={onSubmit} disabled={buttonDisabled}>
          Publish
        </button>
      </form>
    </div>
  );
}
