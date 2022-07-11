import React from 'react';

function Nav() {

    function aboutSelected() {
        console.log('hello');
    }

    return (
        <div>
            <ul>
                <li>
                    <a href='#about' onClick={aboutSelected}>About</a> 
                </li>
                <li>
                    <span>Portfolio</span>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                <li>
                    <span>Resume</span>
                </li>
            </ul>
        </div>
    )
}

export default Nav;