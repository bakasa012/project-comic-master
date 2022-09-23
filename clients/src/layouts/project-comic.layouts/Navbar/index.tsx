import { Layout } from 'antd';
import React from 'react';
import { ResponsiveNavbar } from 'react-hamburger-menus';
import 'react-hamburger-menus/dist/style.css';
import './css/nav.scss';
const NavbarComponent = () => {
  const { Header } = Layout;

  return (
    <>
      <Header className="header" style={{ height: 'auto' }}>
        <ResponsiveNavbar
          className="header-nav"
          logo={
            <div className={'header-logo'}>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  fontFamily: 'megaton',
                  fontSize: 26,
                }}
              >
                MEGATEAM
              </div>
            </div>
          }
          styles={{
            navigation: { fontFamily: 'Arial, Helvetica, sans-serif', height: 'auto' },
            navigationBarLarge: {
              backgroundColor: 'rgb(255, 255, 255)',
            },
            navigationBarSmall: {
              backgroundColor: 'aliceblue',
            },
            navigationCardSmall: {
              backgroundColor: 'aliceblue',
            },
          }}
        >
          <ul className="header-ul">
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>ELEMENTS</li>
            <li>CONTACT</li>
          </ul>
        </ResponsiveNavbar>
      </Header>
      <div style={{ height: '100vh' }}>aaaaaa</div>
    </>
  );
};

export default NavbarComponent;
