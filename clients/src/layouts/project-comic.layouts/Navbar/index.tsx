import React from 'react';
import { GhostNavbar, ResponsiveNavbar } from 'react-hamburger-menus';
import 'react-hamburger-menus/dist/style.css';
const NavbarComponent = () => {
  return (
    <>
      <ResponsiveNavbar
        logo={<p>Logo</p>}
        styles={{
          navigation: { fontFamily: 'Arial, Helvetica, sans-serif' },
          navigationBarLarge: {
            backgroundColor: 'aliceblue',
          },
          navigationBarSmall: {
            backgroundColor: 'aliceblue',
          },
          navigationCardSmall: {
            backgroundColor: 'aliceblue',
          },
        }}
      >
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </ResponsiveNavbar>
      <GhostNavbar
        styles={{
          floatButtonX: 2,
        }}
      >
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
    </>
  );
};

export default NavbarComponent;
