import { Affix, Layout, Menu, MenuProps } from 'antd';
import React from 'react';
import TweenOne from 'rc-tween-one';
// import style from './css/nav.module.scss';
import './css/nav.scss';
import { NavDataSource } from './dataSource';
interface NavProps {
  isMobile: boolean;
}
type MenuItem = Required<MenuProps>['items'][number];

const { Header } = Layout;
const NavComponent = (props: NavProps) => {
  const { isMobile } = props;
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
    ...NavDataSource.Menu.children.map((menu, index) => {
      const { children, name, className } = menu;
      return getItemMenu(children.childrenName, name, className);
    }),
  ];
  return (
    <Affix>
      <Header className={'header'}>
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
          <div className='header-mobile-menu'>
            <em />
            <em />
            <em />
          </div>
        )}
        {/* <TweenOne>

        </TweenOne> */}
        <div className='header-menu'>
          <Menu
            // theme="dark"
            mode={isMobile ? 'inline' : 'horizontal'}
            defaultSelectedKeys={['1']}
            items={items}
          />
        </div>

      </Header>
    </Affix>
  );
};

export default NavComponent;
