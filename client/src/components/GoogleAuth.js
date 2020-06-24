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

	signIn = () => {
		this.auth.signIn();
	}

	signOut = () => {
		this.auth.signOut();
	}

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
			return (
				<button onClick={this.signOut} className="ui red google button"><i className="google icon" />Sign Out</button>
			)
		} else {
			return <button onClick={this.signIn} className="ui green google button"><i className="google icon" />Sign In with Google</button>
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
