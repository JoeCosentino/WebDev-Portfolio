import React from 'react';

function Nav(props) {

    const {
        // contactSelected,
        setContactSelected,
        // portfolioSelected,
        setPortfolioSelected,
        // aboutSelected,
        setAboutSelected,
        // resumeSelected,
        setResumeSelected
    } = props;


    return (
        <section className='header'>
            <h2>
                <a href='/'>Giuseppe Cosentino</a>
            </h2>
            <ul>
                <li>
                    <span onClick={() => {
                        setAboutSelected(true)
                        setContactSelected(false)
                        setResumeSelected(false)
                        setPortfolioSelected(false)
                    }}>About</span> 
                </li>
                <li>
                    <span onClick={() => {
                        setPortfolioSelected(true)
                        setAboutSelected(false)
                        setContactSelected(false)
                        setResumeSelected(false)
                    }}
                        >Portfolio</span>
                </li>
                <li>
                    <span onClick={() => {
                    setContactSelected(true)
                    setAboutSelected(false)
                    setResumeSelected(false)
                    setPortfolioSelected(false)
                    }} >Contact</span>
                </li>
                <li>
                    <span onClick={() => {
                        setResumeSelected(true)
                        setPortfolioSelected(false)
                        setAboutSelected(false)
                        setContactSelected(false)
                    }}>Resume</span>
                </li>
            </ul>
        </section>
    )
}

export default Nav;