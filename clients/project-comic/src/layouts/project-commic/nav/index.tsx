import { Affix, Layout, Menu } from 'antd';
import React from 'react';
import style from './css/nav.module.scss';
const { Header } = Layout;
const NavComponent = () => {
  return (
    <Affix>
      <Header className={style['header']}>
        <div className={style['header-logo']}>
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
        <Menu
          // theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header>
    </Affix>
  );
};

export default NavComponent;
