// ColorContainer.jsx
import React, { Component } from 'react';
import ColorComponent from '../components/ColorComponent';

class ColorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#EFEFEF'
        }
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
                update = {this.props.update}
                colorChange = {this.colorChange}
                />
            </div>
        )
    }
}

export default ColorContainer;