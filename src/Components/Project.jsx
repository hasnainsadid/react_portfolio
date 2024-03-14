import React, { useState } from "react";
import "../Css/Project.css";
import Data from "./Data";

const Project = () => {
  const [items, setitems] = useState(Data);
  return (
    <div className="Project">
      <h1
        className="mt-5 pt-4 text-center"
        style={{ "font-family": "'Roboto Slab', serif" }}
      >
        Projects
      </h1>
      <hr className="hr1" />
      <div className="row mt-5">
        {items.slice().reverse().map((e) => {
          const { id, name, desc, link } = e;
          return (
            <div className="col-11 mx-auto" key={id}>
              <div className="card">
                <div className="card-head px-3">
                  <h3>{name}</h3>
                </div>
                <div className="card-body">
                  <h6>{desc}</h6>
                </div>
                <div className="card-footer">
                  <a href={link} target="_blank" className="link text-light">
                    Project Link
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
