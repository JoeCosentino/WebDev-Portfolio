import React from 'react';

function Nav(props) {

    const {
        contactSelected,
        setContactSelected
    } = props;


    return (
        <section className='header'>
            <h2>
                <a href='/'>Giuseppe Cosentino</a>
            </h2>
            <ul>
                <li>
                    <a href='#about' onClick={() => setContactSelected(false)}>About</a> 
                </li>
                <li>
                    <span>Portfolio</span>
                </li>
                <li>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                <li>
                    <span>Resume</span>
                </li>
            </ul>
        </section>
    )
}

export default Nav;