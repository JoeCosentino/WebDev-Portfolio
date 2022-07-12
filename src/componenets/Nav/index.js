import React from 'react';

function Nav(props) {

    const {
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        aboutSelected,
        setAboutSelected,
        resumeSelected,
        setResumeSelected
    } = props;


    return (
        <section className='header'>
            <h2>
                <a href='/'>Giuseppe Cosentino</a>
            </h2>
            <ul>
                <li>
                    <a href='#about' onClick={() => setContactSelected(!aboutSelected)}>About</a> 
                </li>
                <li>
                    <span onClick={() => setContactSelected(!portfolioSelected)}>Portfolio</span>
                </li>
                <li>
                    <span onClick={() => setContactSelected(!contactSelected)} >Contact</span>
                </li>
                <li>
                    <span onClick={() => setContactSelected(!resumeSelected)}>Resume</span>
                </li>
            </ul>
        </section>
    )
}

export default Nav;