import { FC, PropsWithChildren } from 'react';
import cls from 'classnames';

import classes from './Button.module.scss';

type ButtonStyle = 'primary' | 'secondary';

type ButtonProps = PropsWithChildren<{
	view?: ButtonStyle;
}> &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return (
		<button
			className={cls(classes['button'], {
				[classes['button--primary']]: props.view === 'primary',
				[classes['button--secondary']]: props.view === 'secondary',
			})}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
