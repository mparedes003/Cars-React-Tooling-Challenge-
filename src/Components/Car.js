import React from 'react';
import PropTypes from 'prop-types';

const Car = (props) => {
  return ( 
    <div>
      <h2>{props.data.make}</h2>
      <h3>{props.data.model}</h3>
      <h4>{props.data.color}</h4>
    </div>
   );
};

Car.propTypes = {
  car: PropTypes.shape({
    "id": PropTypes.number.isRequired,
    "make": PropTypes.string.isRequired,
    "model": PropTypes.string.isRequired,
    "color": PropTypes.string.isRequired
  })
};
 
export default Car;