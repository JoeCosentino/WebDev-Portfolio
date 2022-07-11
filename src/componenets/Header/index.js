import React from 'react';
import Nav from '../Nav';

function Header() {
    return(
        <section className='header'>
            <h2>
                <a href='/'>Giuseppe Cosentino</a>
            </h2>
            <Nav></Nav>
        </section>
    )
}

export default Header;