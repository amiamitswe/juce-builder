import { countBy } from 'lodash';
import React from 'react';
import classes from './Item.module.css';

const Item = ({ item, itemCount, addItemHandler, removeItemHandler }) => {
  const itemCountBy = countBy(itemCount);

  const capitalize = (word) =>
    word[0].toUpperCase() + word.slice(1).toLowerCase();
  return (
    <li className={classes.juce_select}>
      <div>
        {capitalize(item)}{' '}
        <span className={classes.quantity}>{itemCountBy[item]}</span>
      </div>
      <div className={classes.juce_buttons}>
        <button
          disabled={itemCountBy[item] >= 5}
          type="button"
          onClick={() => addItemHandler(item)}
          className={[classes.btn, classes.plus].join(' ')}
        >
          +
        </button>
        <button
          disabled={!(itemCountBy[item] >= 0)}
          type="button"
          onClick={() => removeItemHandler(item)}
          className={[classes.btn, classes.minus].join(' ')}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
