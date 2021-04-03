// ColumnContainer.jsx
import React, { Component } from 'react';
import ColorContainer from './colorContainer';
import ColorComponent from '../components/colorComponent';

class ColumnContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: [],
            counter: 1,
        }
        this.update = this.update.bind(this);
        this.increment = this.increment.bind(this);
    }

    //Updates state with current color on palette
    update(e) {
        const color = e.target.id;
        console.log(color);
        const current = this.state;
        current.palette[color] = '#EFEFEF'
        this.setState(current);
    }
    //incremeter function increments colorCounter
    increment(e) {
        const current = this.state;
        current.counter += 1;
        this.setState(current);
    }

    render() {
        //colors array stores one color container for each colorCounter number
        const colors = []
        //for loop that iterates colorCounter number of times and pushes a new ColorContainer into colors array
        for (let i=0; i < this.state.counter; i+=1) {
            colors.push(<ColorContainer
            update = {this.update}
            key = {i}
            />)
        }
        //returns a div with a button that invokes incrementer function onclick and 
        return (
            <div className='ColorContainer'>
                {colors}
                <button id='addB'onCLick={incrementer}>Add Color</button>
                <form>
                    <input id='saveB' type='submit'>Save Palette</input>
                </form>
            </div>
        )
    }
}

export default ColumnContainer;