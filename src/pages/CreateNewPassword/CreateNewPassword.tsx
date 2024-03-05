import Button from '../../components/Button';
import Input from '../../components/Input';
import Title from '../../components/Title/Title';

import classes from './CreateNewPassword.module.scss';
import logo from '../../assets/logo.svg';
import useCreateNewPassword from './useCreateNewPassword';

const CreateNewPassword = () => {
	const { form, onChange, error, handleSubmit } = useCreateNewPassword();

	return (
		<div className={classes['create-new-password']}>
			<img
				className={classes['create-new-password__logo']}
				src={logo}
				alt='Logo'
			/>
			<Title>Create new password?</Title>
			<form
				className={classes['create-new-password__form']}
				onSubmit={handleSubmit}
			>
				<Input
					name='password'
					value={form.password}
					onInput={onChange}
					placeholder='Password'
					type='password'
					error={error?.password}
					autoFocus
					label='Password'
				/>
				<Input
					name='password_confirm'
					value={form.password_confirm}
					onInput={onChange}
					placeholder='Password'
					type='password'
					error={error?.password_confirm}
					label='Confirm password'
				/>
				<Button type='submit'>Reset password</Button>
			</form>
		</div>
	);
};

export default CreateNewPassword;
