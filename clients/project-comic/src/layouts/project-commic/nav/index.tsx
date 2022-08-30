import { Affix, Layout, Menu, MenuProps } from 'antd';
import React from 'react';
// import style from './css/nav.module.scss';
import './css/nav.scss';
import { isMobile } from 'react-device-detect';
import { NavDataSource2 } from './dataSource2';
interface NavProps {
  isMobile: boolean;
}
type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout;
const NavComponent = (props: NavProps) => {
  const useRefs = React.useRef<HTMLHeadingElement>(null);
  console.log(12005, isMobile);
  const getItemMenu = (
    label: React.ReactNode,
    key: React.Key,
    className?: string,
    icon?: React.ReactNode,
    children?: any[],
    type?: 'group',
  ): MenuItem => ({
    key,
    icon,
    children,
    label,
    type,
    className,
  });
  const items: MenuProps['items'] = [
    ...NavDataSource2.Menu.children.map((menu, index) => {
      const { children, name, className } = menu;
      return getItemMenu(children.childrenName, name, className);
    }),
  ];
  const handleMenu = () => {
    useRefs.current?.classList.toggle('open');
  };
  return (
    <Affix style={{ height: 'auto' }}>
      <Header className={'header'} ref={useRefs}>
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
        {isMobile && (
          <div className="header-mobile-menu" ref={useRefs} onClick={() => handleMenu()}>
            <em />
            <em />
            <em />
          </div>
        )}
        <div className={'header-menu'}>
          <Menu mode={isMobile ? 'inline' : 'horizontal'} defaultSelectedKeys={['1']} items={items} />
        </div>
      </Header>
    </Affix>
  );
};

export default NavComponent;
