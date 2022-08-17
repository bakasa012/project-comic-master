import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import style from './css/banner.module.scss';
import TweenOne from 'rc-tween-one';
const BannerAutoPlayComponent = () => {
  const Banner = () => (
    <BannerAnim prefixCls="banner-user">
      <Element prefixCls="banner-user-elem" key="0">
        <Element.BgElement
          key="bg"
          className="bg"
          style={{
            background: '#364D79',
          }}
        />
        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          Ant Motion Banner
        </TweenOne>
        <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
          The Fast Way Use Animation In React
        </TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="1">
        <Element.BgElement
          key="bg"
          className="bg"
          style={{
            background: '#64CBCC',
          }}
        />
        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          Ant Motion Banner
        </TweenOne>
        <TweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
          The Fast Way Use Animation In React
        </TweenOne>
      </Element>
    </BannerAnim>
  );

  return (
    <>
      <div className={style['banner']}>
        <QueueAnim key="QueueAnim" type={['bottom', 'top']} delay={200} className={style['banner-text-wrapper']}>
          <div className="banner-logo"></div>
          <div className={style['banner-content']} key={'content'}>
            MeGaTeam
          </div>
        </QueueAnim>
      </div>
    </>
  );
};

export default BannerAutoPlayComponent;
