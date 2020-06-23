import React from 'react';

class GoogleAuth extends React.Component {
	componenDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client.init({
				clientId: "158094877315-kovs8j4pmp22erfhb8l9vgqrvl1j932p.apps.googleusercontent.com"
			})
		});
	}
	render() {
		return (
			<div>
				GoogleAuth
			</div>
		)
	}
};

export default GoogleAuth;
