import React from "react";
import "./ExperienceBox.css";

function ExperienceBox({ title, sentences, subtitle, images }) {
  // title - string
  // sentences - array of strings
  // subtitle - string
  // images - array of images

  return (
    <div className="ex_box_container">
      <p className="ex_box_title">{title}</p>
      <div className="ex_box_sentences">
        {sentences.map((value, key) => (
          <p>{value}</p>
        ))}
      </div>
      <p className="ex_box_subtitle">{subtitle}</p>
      <div className="ex_box_images">
        {images.map((value, key) => (
          <img src={value} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceBox;
