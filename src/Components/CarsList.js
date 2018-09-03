import React from 'react';
import Car from './Car';
import PropTypes from 'prop-types';


const  CarsList= (props) => {
 
  return <div>{props.cars.map(item => 
              <Car 
              key={item.id} 
              data={item} 
              />
            )}
          </div>;
};

CarsList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object)
};
 
export default CarsList;