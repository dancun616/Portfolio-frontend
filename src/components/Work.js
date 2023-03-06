import WorkCard from "./WorkCard";
import React, { useState } from "react";

const Work = () => {
  const [data, setData] = useState([]);

  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [view, setView] = useState("");

  const handleAddProject = () => {
    const newProject = {
      imgsrc: imgUrl,
      title: title,
      text: description,
      view: view
    };
    setData([...data, newProject]);
    setImgUrl("");
    setTitle("");
    setDescription("");
    setView("");
  };

  return (
    <div className="work-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Add project URL"onChange={(e) => setImgUrl(e.target.value)} required />
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="View" value={view} onChange={(e) => setView(e.target.value)} required />
        <button className="btn" onClick={handleAddProject}>ADD</button>
      </form>
      <div className="project-container">
        {data.map((val, ind) => {
          return(
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Work;
