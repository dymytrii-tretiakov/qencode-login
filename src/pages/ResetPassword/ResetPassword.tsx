import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title';

import classes from './ResetPassword.module.scss';
import logo from '../../assets/logo.svg';
import useResetPassword from './useResetPassword';

const ResetPassword = () => {
	const { form, onChange, error, handleSubmit } = useResetPassword();

	return (
		<div className={classes['reset-password']}>
			<img className={classes['reset-password__logo']} src={logo} alt='Logo' />
			<Title>Forgot Password?</Title>
			<form className={classes['reset-password__form']} onSubmit={handleSubmit}>
				<Input
					name='email'
					value={form.email}
					onInput={onChange}
					placeholder='Enter your email'
					type='email'
					error={error?.email}
					autoFocus
				/>
				<Button type='submit'>Sand</Button>
				<Button type='submit' view='secondary'>
					Cancel
				</Button>
			</form>
		</div>
	);
};

export default ResetPassword;
