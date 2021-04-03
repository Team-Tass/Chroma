// ColorComponent.jsx
import React from 'react';

const ColorComponent = (props) => {
  // const props = { props };
  return (
    <div>
      <input type="color" onChange={() => console.log('onChange ColorComponent')}></input>
    </div>
  )
}

export default ColorComponent;
