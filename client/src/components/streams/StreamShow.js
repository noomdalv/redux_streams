import React from 'react';
import flv from 'flv.js';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';

class StreamShow extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	render() {
		console.log(this.props)
		if (!this.props.stream) {
			return (<div>Loading...</div>);
		} else {
			const { title, description } = this.props.stream;
			return (
				<div>
					<video src="" />
					<h1>{title}</h1>
					<h5>{description}</h5>
				</div>
			);
		}
	}
};

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
