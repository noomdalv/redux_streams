import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';


class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderList() {
		console.log(this.props.streams);
		return this.props.streams.map(stream => {
			return (
				<div className="item" key={stream.id}>
					{this.renderEditDelete(stream)}
					<i className="big middle aligned icon camera" />
					<div className="content">
						<Link to={`/streams/${stream.id}`} className="header">
							{stream.title}
						</Link>
						<div className="description"><p>{stream.description}</p></div>
					</div>
				</div>
			);
		})
	}

	renderEditDelete(stream) {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui circular button">Edit</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui circular button">
						Delete
					</Link>
				</div>
			);
		}
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: "right" }}>
					<Link to="/streams/new" className="ui button primary">Create Stream</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h3>Streams</h3>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
};

const mapStateToProps = state => ({
	streams: Object.values(state.streams),
	currentUserId: state.auth.userId,
	isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { fetchStreams })(StreamList);
