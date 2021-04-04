// MainContainer.jsx
import React, { Component } from 'react';
import ColumnContainer from './ColumnContainer';
import SearchForm from '../components/SearchForm';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ColumnContainers: [<ColumnContainer />],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    // conditionally add body to request if id is empty
    console.log('handleSubmit', id);
    fetch('/api/palette/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // this.setState((prevState) => 
        //   ({ ColumnContainers: prevState.ColumnContainers.push(<ColumnContainer />) }));
      });
  }

  render() {
    const { ColumnContainers } = this.state;
    return (
      <div>
        {ColumnContainers}
        <SearchForm handleSubmit={this.handleSubmit} />
        {/* <ColorComponent /> */}
      </div>
    );
  }
}

export default MainContainer;
