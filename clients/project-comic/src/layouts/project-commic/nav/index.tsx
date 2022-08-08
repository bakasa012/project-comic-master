import { Layout } from 'antd';
import TweenOne from 'rc-tween-one';
import React from 'react';

const NavComponent = () => {
	const { Header } = Layout
	return (
		<Header>
			<TweenOne component={'header'} animation={{ opacity: 0, type: 'from' }} className='header0 home-page-wrapper'>
				<TweenOne animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }} className='header0-logo'>
					<img src='https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg' alt='img' />
				</TweenOne>
			</TweenOne>
		</Header>
	);
};

export default NavComponent;