// ColorContainer.jsx
import React, { Component } from 'react';
import ColorComponent from '../components/ColorComponent';

class ColorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
        }
        console.log('this.state.color', this.state.color);
        this.colorChange = this.colorChange.bind(this);
    }

    colorChange(e) {
        this.setState({color: e.target});
    }

    render() {
        return (
            <div style = {{backgroundColor: this.state.color}} className='ColorContainer'>
                <h1>testing</h1>
                <ColorComponent
                key={this.props.id}
                id={this.props.id}
                update = {this.props.update}
                colorChange = {this.colorChange}
                color={this.state.color}
                />
            </div>
        )
    }
}

export default ColorContainer;