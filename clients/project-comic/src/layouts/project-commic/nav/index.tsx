import { Layout, MenuProps } from 'antd';
import TweenOne from 'rc-tween-one';
import React from 'react';
import './nav.scss';
type MenuItem = Required<MenuProps>['items'][number];
const NavComponent = () => {
	const { Header } = Layout;

	const getItemMenu = (
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: 'group',
	): MenuItem => ({
		key,
		icon,
		children,
		label,
		type,
	});
	const items = [

	]
	return (
		<Header>
			<TweenOne component={'header'} animation={{ opacity: 1, type: 'from' }} className='header0 home-page-wrapper'>
				<TweenOne animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }} className='header0-logo'>
					<img src='https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg' alt='img' />
				</TweenOne>
			</TweenOne>
		</Header>
	);
};

export default NavComponent;