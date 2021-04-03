// SearchForm.jsx
import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }

  render() {
    return (
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h2>SearchForm</h2>
        <input
          type="text"
          id="id"
          name="id"
          onChange={(event) => {
            this.setState({ id: event.target.value });
          }}
        />
        <input
          type="submit" value="Get Palette by ID" />
      </form>
    )
  }
};

export default SearchForm;
