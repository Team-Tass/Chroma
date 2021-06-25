import React, { Component } from 'react';
import ColorContainer from './ColorContainer';
import ColorComponent from '../components/ColorComponent';

/**
 * @returns div with a button that invokes incrementer function on click
 */
class ColumnContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: [],
            counter: 1,
        };
        if (props.palette) {
            // push colors props to state
            // pass colors to props
            console.log(props.palette);
            const newPalette = props.palette.map((hex) => hex.color);
            console.log('newPalette', newPalette);
            const newCounter = newPalette.length;
            console.log('newCounter', newCounter);
            this.state = {
                palette: newPalette,
                counter: newCounter,
            };
        }
        this.update = this.update.bind(this);
        this.deleteColor = this.deleteColor.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // Updates state with current color on palette
    update(e, index) {
        // const index = e.target.id;
        console.log(index);
        const current = this.state;
        // current.palette[index] = {"color": e.target.value};
        current.palette[index] = e.target.value;
        this.setState(current);
    }

    deleteColor(id) {
        console.log(id);
        const newPalette = this.state.palette;
        newPalette.splice(id, 1);
        console.log(newPalette);
        this.setState({palette: newPalette});
    }

    // incremeter function increments colorCounter
    increment(e) {
        const current = this.state;
        current.counter += 1;
        this.setState(current);
    }

    // decerementer function decerements colorCoounter
    decrement(e) {
        const current = this.state;
        current.counter -= 1;
        this.setState(current);
    }

    // post request sends our current palette to the server when save button is clicked
    handleSave(e) {
        console.log(this.state.palette);
        e.preventDefault();
        const paletteBody = this.state.palette.map((hex) => {
            return {color: hex};
        });
        fetch('/api/palette', {
        method: 'POST',
        headers: {
            'Accept': 'Application/JSON',
            'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({ palette: paletteBody }),
        })
        .then((data) => {
            console.log('res from server POSTing palette', data);
        });
    }

    render() {
        // colors array stores one color container colorCounter number of times
        const colors = []
        // for loop that iterates colorCounter number of times and pushes a new ColorContainer into colors array
        for (let i=0; i < this.state.counter; i+=1) {
            colors.push(<ColorContainer
            update = {this.update}
            decrement = {this.decrement}
            deleteColor = {this.deleteColor}
            columnState = {this.state}
            key = {i}
            id = {i}
            color = {this.state.palette[i]}
            />)
        }
        
        return (
            <div className='ColumnContainer'>
                {colors}
                <button id='addB' onClick={this.increment}>Add Color</button>
                <form onSubmit={(e) => this.handleSave(e)}>
                    <input id='saveB' type='submit' value='Save Palette'></input>
                </form>
            </div>
        )
    }
}

export default ColumnContainer;