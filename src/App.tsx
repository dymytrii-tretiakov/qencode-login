import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CreateNewPassword from './pages/CreateNewPassword';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Private from './pages/Private';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/reset-password',
		element: <ResetPassword />,
	},
	{
		path: '/create-new-password',
		element: <CreateNewPassword />,
	},
	{
		path: '/private',
		element: <Private />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
