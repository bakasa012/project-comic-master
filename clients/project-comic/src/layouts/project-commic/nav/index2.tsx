import { Layout, Menu, MenuProps } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import TweenOne from 'rc-tween-one';
import React from 'react';
import { Nav00DataSource } from '../../demos/Home/data.source';
import './nav.scss';
import { NavDataSource } from './dataSource';
type MenuItem = Required<MenuProps>['items'][number];
const NavComponent = () => {
  const { Header } = Layout;
  const [isMobile, SetMobile] = React.useState<boolean>(false);
  const [phoneOpen, setPhoneOpen] = React.useState<any>(undefined);
  const getItemMenu = (
    label: React.ReactNode,
    key: React.Key,
    className?: string,
    icon?: React.ReactNode,
    children?: MenuItem[],
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
      const { subItem, children, name, className } = menu;
      return getItemMenu(children.childrenName, name, className);
    }),
  ];
  return (
    <Header>
      <TweenOne animation={{ opacity: 1, type: 'from' }} className="header0 home-page-wrapper">
        <div className="home-page">
          <TweenOne animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }} className="header0-logo">
            <img src={'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg'} alt="img" />
          </TweenOne>
          <TweenOne className="header0-menu" moment={300} reverse={!!phoneOpen}>
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              className={NavDataSource.Menu.className}
              theme="dark"
              items={items}
            />
          </TweenOne>
        </div>
      </TweenOne>
    </Header>
  );
};

export default NavComponent;
