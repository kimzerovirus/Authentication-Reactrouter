import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAuth } from '../Auth/Auth';

function LoginPage() {
	const navigate = useNavigate();
	const location = useLocation() as any;
	const auth = useAuth();

	const from = location.state?.from?.pathname || '/';
	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			name: { value: string };
		};
		console.log(target.name.value);

		if (target.name.value) {
			auth.signin(target.name.value, () => {
				// Send them back to the page they tried to visit when they were
				// redirected to the login page. Use { replace: true } so we don't create
				// another entry in the history stack for the login page.  This means that
				// when they get to the protected page and click the back button, they
				// won't end up back on the login page, which is also really nice for the
				// user experience.
				navigate(from, { replace: true });
			});
		} else alert('이름을 입력하시오');
	};
	return (
		<div className="flex w-full mt-100px justify-center items-center">
			<form onSubmit={submitHandler}>
				<div className="w-full">
					<label htmlFor="name">name: </label>
					<input
						type="text"
						name="name"
						className="border-b border-black mb-6"
					/>
				</div>
				<button
					type="submit"
					className="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full border border-gray-400 rounded shadow"
				>
					login
				</button>
			</form>
		</div>
	);
}

export default LoginPage;
