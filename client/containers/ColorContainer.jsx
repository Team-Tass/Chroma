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

    //Changes the color of the current container to correspond with when its ColorComponent's color input is changed
    colorChange(e) {
        this.setState({color: e.target.value});
    }

    // static getDerivedStateFromProps(props, state) {
    //     if (props.id !== state.prevPropsId) {
    //         return {
    //             prevPropsId: props.id,
    //             color: props.columnState.palette[props.id]
    //         };
    //     }
    //     return null;
    // }

    render() {
        return (
            <div style = {{backgroundColor: this.state.color}} className='ColorContainer'>
                <h1>{this.state.color}</h1>
                <ColorComponent
                key={this.props.id}
                id={this.props.id}
                update = {this.props.update}
                colorChange = {this.colorChange}
                color={this.state.color}
                />
                <button id='deleteB' onClick={() => {
                    this.props.deleteColor(this.props.id);
                    this.props.decrement();
                }}>Delete Color
                </button>
            </div>
        )
    }
}

export default ColorContainer;