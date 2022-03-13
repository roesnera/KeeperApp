import React from 'react';

function Footer() {
    let today = new Date();
    let year = today.getFullYear();

    return <footer>&copy; {year}</footer>
};

export default Footer;