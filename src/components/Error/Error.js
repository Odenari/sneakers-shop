import { useRouteError } from 'react-router-dom';

export default function Error() {
	const error = useRouteError();
	console.log(error);
	return (
		<>
			<div
				className='d-flex justify-center align-center'
				style={{
					height: '100vh',
					flexDirection: 'column',
					gap: '20px',
				}}
			>
				<h2>
					We are sincerely apologizing 🦊, because an unexpected error has
					ocurred. Please try again 🍺
				</h2>
				<h5>Content {error.statusText}</h5>
			</div>
		</>
	);
}
