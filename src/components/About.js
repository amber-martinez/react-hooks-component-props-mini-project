import React from "react";

function About({
    about,
    imgSrc="https://via.placeholder.com/215"}) {
        return (
            <aside>
                <img src={imgSrc} alt="blog logo"></img>
                <p>{about}</p>
            </aside>
        )
}

export default About