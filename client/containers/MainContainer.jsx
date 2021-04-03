// MainContainer.jsx
import React from 'react';
import ColumnContainer from './ColumnContainer';
import ColorComponent from '../components/ColorComponent';
import SearchForm from '../components/SearchForm';

const MainContainer = (props) => {
  return (
    <div>
      {/* <ColumnContainer /> */}
      <SearchForm />
      {/* <ColorComponent /> */}
    </div>
  );
}

export default MainContainer;
