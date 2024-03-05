import { FC } from 'react';
import Button from '../Button';

import classes from './IconButton.module.scss';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	icon: string;
	text: string;
};

const IconButton: FC<IconButtonProps> = ({ icon, text, ...props }) => {
	return (
		<Button className={classes['icon-button']} {...props}>
			<img src={icon} alt='Icon' />
			{text}
		</Button>
	);
};

export default IconButton;
