import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item"><h2>EasyStream App</h2></Link>
			<div className="right menu">
				<Link to="/" className="item"><h5>All Streams</h5></Link>
			</div>
			<GoogleAuth />
		</div>
	)
};

export default Header;
