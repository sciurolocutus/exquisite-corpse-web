import React from 'react';
import './TextEntryComponent.css';

//TODO: externalize timer, take in as dependency;
//TODO: more than one component will need to coordinate on time.
class TextEntryComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
			time: 0,
			start: 0,
			isTicking: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.startTimer = this.startTimer.bind(this)
		this.stopTimer = this.stopTimer.bind(this)
		this.resetTimer = this.resetTimer.bind(this)
	}

	get interval() {
		return (this.props.interval !== undefined
			? this.props.interval
			: 10
		)
	}

	timerUp() {
		this.stopTimer();
		this.resetTimer();
		if (typeof(this.props.cb) == 'function') {
			this.props.cb(this);
		}
		this.startTimer();
	}

	startTimer() {
		this.setState({
			time: this.state.time,
			start: Date.now() - this.state.time,
			isTicking: true
		});
		this.timer = setInterval(() => {
			let t = (Date.now() - this.state.start) / 1000
			if (this.interval - t <= 0) {
				this.timerUp();
			} else {
				this.setState({
					time: t
				});
			}

		}, 1000);
	}

	stopTimer() {
		this.setState({isTicking: false});
		clearInterval(this.timer);
	}

	resetTimer() {
		this.setState({time: 0});
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('Text was submitted: ' + this.state.value);
		event.preventDefault();
	}

	componentWillMount() {
		this.startTimer();
	}

	render () {

		let start = (this.state.time === 0) ?
			<button onClick={this.startTimer}>start</button> :
			null;
		let stop = (this.state.isTicking) ?
			<button onClick={this.stopTimer}>stop</button> :
			null;
		let reset = (this.state.time !== 0 && !this.state.isOn) ?
			<button onClick={this.resetTimer}>reset</button> :
			null;
		let resume = (this.state.time !== 0 && !this.state.isOn) ?
			<button onClick={this.startTimer}>resume</button> :
			null;

		return (
			<div className="TextEntryComponent">
				<h3>timer: {Math.floor(this.interval - this.state.time)}</h3>
				<h4>[{start}, {resume}, {stop}, {reset}]</h4>
				<h4>[{this.state.start}, {this.state.time}, {this.interval}, {this.state.isTicking ? 'ticking' : 'stopped'}]</h4>
			<form id="writing">
			<textarea className="TextEntryComponent-textarea" onChange={this.handleChange}/>
			</form>
			</div>
		);
	}
}

export default TextEntryComponent;
