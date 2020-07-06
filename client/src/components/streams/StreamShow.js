import React from 'react';
import flv from 'flv.js';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';

class StreamShow extends React.Component {
	constructor(props) {
		super(props)
		this.videoRef = React.createRef();
	}

	 componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchStream(id);
		this.buildPlayer();
	}

	componentDidUpdate() {
		this.buildPlayer();
	}

	componentWillUnmount() {
		this.player.destroy();
	}

	buildPlayer() {
		if (this.player || !this.props.stream) { return;}

		const { id } = this.props.match.params;

		this.player = flv.createPlayer({
			type: "flv",
			url: `ws://localhost:8000/live/${id}.flv`
		});
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}

	render() {
		console.log(this.props)
		if (!this.props.stream) {
			return (<div>Loading...</div>);
		} else {
			const { title, description } = this.props.stream;
			return (
				<div>
					<video
						ref={this.videoRef}
						style={{ width: "96%", margin: 12 }}
						controls
					/>
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
