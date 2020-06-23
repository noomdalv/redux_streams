import React from 'react';

class GoogleAuth extends React.Component {
	state = {	isSignedIn: null };

	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client.init({
				clientId: "158094877315-kovs8j4pmp22erfhb8l9vgqrvl1j932p.apps.googleusercontent.com",
				scope: 'email'
			})
			.then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.setState({ isSignedIn: this.auth.isSignedIn.get() })
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		})
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	}

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>I dont know.</div>
		} else if (this.state.isSignedIn) {
			return <div>I'm signed in.</div>
		} else {
			return <div>I'm not signed in.</div>
		}
	}

	render() {
		return (
			<div>
				{this.renderAuthButton()}
			</div>
		)
	}
};

export default GoogleAuth;
