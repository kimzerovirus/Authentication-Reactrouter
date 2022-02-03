import React from 'react';
import { useAuth } from '../Auth/Auth';

function PrivatePage() {
	const auth = useAuth();
	return (
		<div className="flex justify-center items-center mt-100px">
			<h1>{auth.user}'s Private Page</h1>
		</div>
	);
}

export default PrivatePage;
