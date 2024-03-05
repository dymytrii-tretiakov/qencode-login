import { FC, PropsWithChildren } from 'react';
import classes from './Title.module.scss';

const Title: FC<PropsWithChildren> = ({ children }) => {
	return <h1 className={classes['title']}>{children}</h1>;
};

export default Title;
