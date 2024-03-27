import {
	Person,
	Gear       
} from 'react-bootstrap-icons';

const QuickMenuItems = [
	{
		id: 1,
		title: 'Settings',
		link: '/settings',
		icon:<Person/>
	},
	{
		id: 2,
		title: 'Sign Out',
		link: '/authentication/sign-out',
		icon:<Gear/>
	},	
];

export default QuickMenuItems;
