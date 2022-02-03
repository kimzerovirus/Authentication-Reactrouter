import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';

function NavBar() {
	const auth = useAuth();
	const navigate = useNavigate();
	const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
		return {
			fontWeight: isActive ? 'bold' : 'normal',
			// textDecoration: isActive ? 'underline' : 'none',
			opacity: isActive ? 1 : 0.5,
		};
	};

	return (
		<nav className="bg-gray-800 text-white p-3 flex w-full justify-center">
			<NavLink to="/" style={navLinkStyles} className="block pr-2 pl-2">
				public
			</NavLink>
			<NavLink to="private" style={navLinkStyles} className="block pr-2 pl-2">
				private
			</NavLink>
			{!auth.user && (
				<NavLink to="login" style={navLinkStyles} className="block pr-2 pl-2">
					login
				</NavLink>
			)}
			{auth.user && (
				<span
					className="block pr-2 pl-2 cursor-pointer opacity-50"
					onClick={() => auth.signout(() => navigate('/'))}
				>
					logout
				</span>
			)}
		</nav>
	);
}

export default NavBar;
