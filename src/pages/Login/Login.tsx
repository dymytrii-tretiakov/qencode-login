import { Link } from 'react-router-dom';

import classes from './Login.module.scss';

import logo from '../../assets/logo.svg';
import googleIcon from '../../assets/google.svg';
import githubIcon from '../../assets/github.svg';

import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import useLogin from './useLogin';
import Title from '../../components/Title';

const Login = () => {
	const { form, onChange, error, handleSubmit, isShowPassword } = useLogin();

	return (
		<div className={classes['login']}>
			<img className={classes['login__logo']} src={logo} alt='Logo' />
			<Title>Log in to your account</Title>
			<div className={classes['login__method-buttons']}>
				<IconButton icon={googleIcon} text='Google' />
				<IconButton icon={githubIcon} text='GitHub' />
			</div>
			<div className={classes['login__separator']} />
			<form className={classes['login__form']} onSubmit={handleSubmit}>
				<Input
					name='email'
					value={form.email}
					onInput={onChange}
					placeholder='Work email'
					type='email'
					error={error?.email}
					autoFocus
				/>
				{isShowPassword && (
					<>
						<Input
							name='password'
							value={form.password}
							onChange={onChange}
							placeholder='Password'
							type='password'
							error={error?.password}
						/>
						<Link className={classes['login__link']} to='/reset-password'>
							Forgot your password?
						</Link>
					</>
				)}

				<Button type='submit'>Log in to Qencode</Button>
			</form>
			<p className={classes['login__register']}>
				Is your company new to Qencode?
				<a className={classes['login__link']} href='#'>
					Sign up
				</a>
			</p>
		</div>
	);
};

export default Login;
