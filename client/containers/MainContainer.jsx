// MainContainer.jsx
import React, { Component } from 'react';
import ColumnContainer from './ColumnContainer';
import SearchForm from '../components/SearchForm';

const palette = [
  { color: '#002fa7' },
  { color: '#efefef' },
];

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ColumnContainers: [
        <ColumnContainer key={0} />,
        <ColumnContainer
          key={1}
          palette={palette}
        />,
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
        // console.log(data);
        // console.log(this.state.ColumnContainers);
        // add to ColumnContainers and pass as props the colors in data
        this.setState((prevState) => {
          console.log(prevState);
          const { ColumnContainers } = prevState;
          // data.forEach((palette) => {
            //     ColumnContainers.push(
            //       <ColumnContainer
            //         colors={palette}
            //         key={ColumnContainers.length + 1}
            //       />,
            //     );
            //   });
          return {
            ColumnContainers,
          };
        });
      });
  }

  render() {
    const { ColumnContainers } = this.state;
    return (
      <div>
        { ColumnContainers }
        <SearchForm handleSubmit={this.handleSubmit} />
        {/* <ColorComponent /> */}
      </div>
    );
  }
}

export default MainContainer;
