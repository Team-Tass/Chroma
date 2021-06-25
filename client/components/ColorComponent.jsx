import React from 'react';

/**
 * @param {<props>}
 * @returns div with a color input that affects the color of the color container and is stored in the current palette
 */
const ColorComponent = (props) => {
  // const props = { props };
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
