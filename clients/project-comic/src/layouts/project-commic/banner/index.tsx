import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import './banner.scss';
const BannerComponent = () => {
  return (
    <div className="banner0">
      <QueueAnim key="QueueAnim" type={['bottom', 'top']} delay={200} className={'banner0-text-wrapper'}>
        <div key="title" className="banner0-title">
          <img src={'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png'} width="100%" alt="img" />
        </div>
        <div key="content" className="banner0-content">
          {'一个高效的页面动画解决方案'}
        </div>
        <Button ghost key="button" className="banner0-button">
          {'Learn More'}
        </Button>
      </QueueAnim>
    </div>
  );
};

export default BannerComponent;
