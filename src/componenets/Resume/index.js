import React from "react";
import resume from '../../assets/downloads/Joe Cosentino Web Dev Resume 2022.pdf'

function Resume() {
    return (
        <div>
            Download my resume<span>
            <a href={resume} download>Here</a></span>
        </div>
    )
    
}

export default Resume;