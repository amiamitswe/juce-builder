import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';

const Builder = ({
  totalPrice,
  addItemHandler,
  removeItemHandler,
  juceItems,
  itemCount,
}) => {
  return (
    <div className={classes.main_juce_builder}>
      <h2 className={classes.juce_title}>Juce Builder</h2>
      <Items
        juceItems={juceItems}
        itemCount={itemCount}
        addItemHandler={addItemHandler}
        removeItemHandler={removeItemHandler}
      />
      <TotalPrice totalPrice={totalPrice} />
      <button type="button" className={classes.add_to_cart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Builder;
