import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client.init({
				clientId: "158094877315-kovs8j4pmp22erfhb8l9vgqrvl1j932p.apps.googleusercontent.com",
				scope: 'email'
			})
			.then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		})
	}

	onAuthChange = signedIn => {
		if (signedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	}

	signIn = () => {
		this.auth.signIn();
	}

	signOut = () => {
		this.auth.signOut();
	}

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.signOut} className="ui red google button"><i className="google icon" />Sign Out</button>
			)
		} else {
			return <button onClick={this.signIn} className="ui green google button"><i className="google icon" />Sign In with Google</button>
		}
	}

	render() {
		console.log(this.props)
		return (
			<div>
				{this.renderAuthButton()}
			</div>
		)
	}
};

const mapStateToProps = (state) => ({
	isSignedIn : state.auth.isSignedIn,
	userId: state.auth.userId
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
