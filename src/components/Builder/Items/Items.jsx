import React from 'react';
import Item from './Item/Item';
import classes from './Items.module.css';

const Items = ({ juceItems, addItemHandler, removeItemHandler, itemCount }) => {
  const flavors = Object.keys(juceItems);
  return (
    <ul className={classes.juce_meker_controll}>
      {flavors.map((item) => (
        <Item
          key={item}
          item={item}
          itemCount={itemCount}
          addItemHandler={addItemHandler}
          removeItemHandler={removeItemHandler}
        />
      ))}
    </ul>
  );
};

export default Items;
