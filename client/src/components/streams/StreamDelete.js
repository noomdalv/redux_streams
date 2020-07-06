import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);

	}

	renderActions() {
		const { id } = this.props.match.params
		return (
			<div>
				<button to="/" onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
				<Link to="/" className="ui button">Cancel</Link>
			</div>
		)
	};

	render() {
		const streamTitle = this.props.stream ? this.props.stream.title : "";
		return (
			<Modal
				title="Delete Stream"
				content={`Are you sure you want to delete the stream ${streamTitle} ?`}
				actions={this.renderActions()}
				onDismiss={() => history.push("/")}
			/>
		);
	}
};

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
