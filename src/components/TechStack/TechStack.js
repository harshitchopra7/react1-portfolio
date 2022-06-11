import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import cpp from "../../images/techStack/cpp.png";
import firebase from "../../images/techStack/firebase.png";
import github from "../../images/techStack/github.png";
import html from "../../images/techStack/html.png";
import js from "../../images/techStack/js.png";

function TechStack() {

    const techstackData = [
        {
            iconImage: react,
            iconAltProperty: "reactImage",
            iconName: 'React'
        },
        {
            iconImage: js,
            iconAltProperty: "jsImage",
            iconName: 'Javascript'
        },
        {
            iconImage: html,
            iconAltProperty: "htmlImage",
            iconName: 'HTML'
        },
    ]

    const techstackData2 = [
        {
            iconImage: cpp,
            iconAltProperty: "cppImage",
            iconName: 'C++'
        },
        {
            iconImage: firebase,
            iconAltProperty: "firebaseImage",
            iconName: 'Firebase'
        },
        {
            iconImage: github,
            iconAltProperty: "githubImage",
            iconName: 'Github'
        },
    ]

  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_image_rows_container">
          
        {/* Tech Stack Row 1 */}
        <div className="techstack_image_container_row1">

            {techstackData.map((value, key) => (
                <div className="techstack_image_element_container">
                    <img src={value.iconImage} alt={value.iconAltProperty} />
                    <p>{value.iconName}</p>
                </div>
            ))}

        </div>

        {/* Tech Stack Row 2 (which is exactly same as Row 1 but have different icon name, image  and alt property) */}
        <div className="techstack_image_container_row1">

            {techstackData2.map((value, key) => (
                <div className="techstack_image_element_container">
                    <img src={value.iconImage} alt={value.iconAltProperty} />
                    <p>{value.iconName}</p>
                </div>
            ))}

        </div>
      </div>
    </div>
  );
}

export default TechStack;
