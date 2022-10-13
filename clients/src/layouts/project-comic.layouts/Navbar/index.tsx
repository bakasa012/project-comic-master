import { Layout } from 'antd';
import React from 'react';
import { ResponsiveNavbar } from 'react-hamburger-menus';
import 'react-hamburger-menus/dist/style.css';
import './css/nav.scss';
interface Props {
  uList: string[];
  checkDefault: number;
}
const NavbarComponent = (props: Props) => {
  const { Header } = Layout;
  const { uList, checkDefault } = props;
  const ref = React.useRef<HTMLUListElement>(null);
  const reactId = React.useId();
  const handleOnclickUList = (e: React.MouseEvent) => {
    const nodeUl = ref.current?.children;
    if (nodeUl) {
      for (let index = 0; index < nodeUl.length; index++) {
        const element: HTMLUListElement = nodeUl[index] as any;
        element.children[0].classList.replace('header-li-select', 'header-li-checked');

        if (element.children[0].id !== e.currentTarget.id) {
          element.children[0].classList.replace('header-li-checked', 'header-li-select');
        }
      }
    }
  };
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
              backgroundColor: '#1a1e23',
              borderBottom: '1px solid gray',
            },
            navigationBarSmall: {
              backgroundColor: 'aliceblue',
            },
            navigationCardSmall: {
              backgroundColor: 'aliceblue',
            },
          }}
        >
          <ul className="header-ul" ref={ref} key={`ul_${reactId}`}>
            {uList.map((v, index) => (
              <li key={`li_${reactId}_${index}`}>
                <span
                  id={`${reactId}_${index}`}
                  key={`span_${reactId}`}
                  className={index === checkDefault ? 'header-li-checked' : 'header-li-select'}
                  onClick={(e) => handleOnclickUList(e)}
                >
                  {v}
                </span>
              </li>
            ))}
          </ul>
        </ResponsiveNavbar>
      </Header>
    </>
  );
};

export default NavbarComponent;
