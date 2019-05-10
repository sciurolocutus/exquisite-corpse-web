import React from 'react';
import './TextEntryComponent.css';

class TextEntryComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	get rows() {
		return (this.props.rows !== undefined
			? this.props.rows
			: 4
		)
	}

	get cols() {
		return (this.props.cols !== undefined
			? this.props.cols
			: 80
		)
	}


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render () {
	return (
		<form id="writing" classname="TextEntryComponent">
			<textarea classname="TextEtryComponent-textarea" />
		</form>
	);
  }
}

export default TextEntryComponent;
