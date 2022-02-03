import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import PrivatePage from './components/PrivatePage/PrivatePage';
import { AuthProvider } from './components/Auth/Auth';
import RequireAuth from './components/Auth/RequireAuth';

function App() {
	return (
		<AuthProvider>
			<NavBar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route
					path="private"
					element={
						<RequireAuth>
							<PrivatePage />
						</RequireAuth>
					}
				/>
			</Routes>
		</AuthProvider>
	);
}

export default App;
