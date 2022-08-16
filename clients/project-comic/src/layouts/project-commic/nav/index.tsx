import { Affix, Layout } from 'antd';
import React from 'react';
import style from './css/nav.module.scss';
const { Header } = Layout;
const NavComponent = () => {
  return (
    <Affix>
      <Header className="header">
        <div className={style['header-logo']} />
      </Header>
    </Affix>
  );
};

export default NavComponent;
