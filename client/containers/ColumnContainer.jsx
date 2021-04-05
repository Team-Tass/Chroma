// ColumnContainer.jsx
import React, { Component } from 'react';
import ColorContainer from './ColorContainer';
import ColorComponent from '../components/ColorComponent';

class ColumnContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: [],
            counter: 1,
        }
        this.update = this.update.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    //Updates state with current color on palette
    update(e, index) {
        // const index = e.target.id;
        console.log(index);
        const current = this.state;
        current.palette[index] = {"color": e.target.value};
        this.setState(current);
    }
    //incremeter function increments colorCounter
    increment(e) {
        const current = this.state;
        current.counter += 1;
        this.setState(current);
    }
    //decerementer function decerements colorCoounter
    decrement(e) {
        const current = this.state;
        current.counter -= 1;
        this.setState(current);
    }

    //post request sends our current palette to the server when save button is clicked
    handleSave(e) {
        console.log(this.state.palette)
        e.preventDefault();
        fetch('/api/palette', {
        method: 'POST',
        headers: {
            'Accept': 'Application/JSON',
            'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({palette: this.state.palette}),
        })
        .then((data) => {
            console.log('res from server POSTing palette', data);
        });
    }

    render() {
        //colors array stores one color container colorCounter number of times
        const colors = []
        //for loop that iterates colorCounter number of times and pushes a new ColorContainer into colors array
        for (let i=0; i < this.state.counter; i+=1) {
            colors.push(<ColorContainer
            update = {this.update}
            decrement = {this.decrement}
            key = {i}
            id = {i}
            />)
        }
        //returns a div with a button that invokes incrementer function on click
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