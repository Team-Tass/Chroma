// ColorComponent.jsx
import React from 'react';

const ColorComponent = (props) => {
  // const props = { props };
  console.log('props.color', props.color);
  return (
    <div>
      <input 
        type="color" 
        onChange={(event) => props.update(event, props.id)}>
      </input>
    </div>
  )
}

export default ColorComponent;
