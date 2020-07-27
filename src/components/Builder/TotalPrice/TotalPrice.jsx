import React from 'react';
import classes from './TotalPrice.module.css';

const TotalPrice = ({ totalPrice = 0 }) => {
  return (
    <h2 className={classes.TotalPrice}>
      Total Price is :<span> {totalPrice.toFixed(2)} </span> taka
    </h2>
  );
};

export default TotalPrice;
