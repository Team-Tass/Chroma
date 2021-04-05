// ColorComponent.jsx
import React from 'react';

const ColorComponent = (props) => {
  // Returns a div with a color input that affects the color of the color container and is stored in the current palette
  // const props = { props };
  // console.log('props.color', props.color);
  return (
    <div>
      <input 
        type="color"
        placeholder={props.color}
        onChange={(event) => {
          props.update(event, props.id);
          props.colorChange(event);
        }}>
      </input>
    </div>
  );
};

export default ColorComponent;
