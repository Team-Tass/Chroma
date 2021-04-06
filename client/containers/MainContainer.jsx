// MainContainer.jsx
import React, { Component } from 'react';
import ColumnContainer from './ColumnContainer';
import SearchForm from '../components/SearchForm';

const defaultPalette = [
  { color: '#002fa7' },
  { color: '#efefef' },
];

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: [
        defaultPalette,
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    // conditionally add body to request if id is empty
    let endpoint = '/api/palette/';
    // if id is truthy (not an empty string), append to endpoint id
    //   else append to endpoint 'all'
    if (id) {
      endpoint += id;
    } else {
      endpoint += 'all/';
    }

    fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // add to ColumnContainers and pass as props the colors in data
        this.setState((prevState) => {
          const { palettes } = this.state;
          data.forEach((paletteObj) => {
            palettes.push(paletteObj.palette);
          });
          return {
            ...prevState,
            palettes,
          };
        });
      })
      .catch((err) => console.log('error occurred getting data from server', err));
  }

  render() {
    const ColumnContainers = this.state.palettes.map((p) => <ColumnContainer palette={p} />);
    return (
      <div>
        { ColumnContainers }
        <SearchForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default MainContainer;
