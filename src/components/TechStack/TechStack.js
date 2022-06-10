import React from 'react'
import "./TechStack.css";
import react from "../../images/techStack/react.png"
import cpp from "../../images/techStack/cpp.png"
import firebase from "../../images/techStack/firebase.png"
import github from "../../images/techStack/github.png"
import html from "../../images/techStack/html.png"
import js from "../../images/techStack/js.png"

function TechStack() {
  return (
    <div className='techstack_container'>
        <p className='techstack_title'>Tech Stack</p>
        <div className='techstack_image_rows_container'>

            {/* Tech Stack Row 1 */}
            <div className='techstack_image_container_row1'>
                <div className='techstack_image_element_container'>
                    <img src={react} alt="reactImage" />
                    <p>React</p>
                </div>
                <div className='techstack_image_element_container'>
                    <img src={js} alt="jsImage" />
                    <p>Javascript</p>
                </div>
                <div className='techstack_image_element_container'>
                    <img src={html} alt="htmlImage" />
                    <p>HTML</p>
                </div>
            </div>

            {/* Tech Stack Row 2 (which is exactly same as Row 1 but have different icon name, image  and alt property) */}
            <div className='techstack_image_container_row1'>
                <div className='techstack_image_element_container'>
                    <img src={cpp} alt="cppImage" />
                    <p>C++</p>
                </div>
                <div className='techstack_image_element_container'>
                    <img src={firebase} alt="firebaseImage" />
                    <p>Firebase</p>
                </div>
                <div className='techstack_image_element_container'>
                    <img src={github} alt="githubImage" />
                    <p>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechStack