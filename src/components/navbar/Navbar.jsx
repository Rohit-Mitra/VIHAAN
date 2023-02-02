import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#About">About Us</a></p>
          <p><a href="#Track">Tracks</a></p>
          <p><a href="#prize">Prizes</a></p>
          <p><a href="#Timeline">TimeLine</a></p>
          <p><a href="#Judge">Judges</a></p>
          <p><a href="#Sponser">Sponsers</a></p>
          <p><a href="#Faq">FAQs</a></p>
          <p><a href="#Team">Team</a></p>
          <p><a href="#Contact">Contact Us</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#About">About Us</a></p>
            <p><a href="#Track">Tracks</a></p>
            <p><a href="#prize">Prizes</a></p>
            <p><a href="#Timeline">TimeLine</a></p>
            <p><a href="#Judge">Judges</a></p>
            <p><a href="#Sponser">Sponsers</a></p>
            <p><a href="#Faq">FAQs</a></p>
            <p><a href="#Team">Team</a></p>
            <p><a href="#Contact">Contact Us</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
