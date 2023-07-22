import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkCSS from 'components/menu/styles/NavLink.module.css';

const NavLink = () => {
    return (
        <>
        <nav>
            <ul className={NavLinkCSS.menu}>
                <li>
                    <span className={NavLinkCSS.BookstoreCMS}>Bookstore CMS</span>                    
                </li>
                <li>
                <Link to="/" className={NavLinkCSS.BOOKS}>BOOKS</Link>
                </li>
                <li>
                <Link to="/categories" className={NavLinkCSS.CATEGORIES}>CATEGORIES</Link>
                </li>
            </ul>
        </nav>
      </>
    );
};

export default NavLink;
