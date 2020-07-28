import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import TotalPrice from './TotalPrice/TotalPrice';

const Builder = ({
  totalPrice = 0,
  addItemHandler,
  removeItemHandler,
  juceItems,
  itemCount,
  display,
  showModalHandler,
  closeModal,
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
      <button
        disabled={itemCount >= 0}
        type="button"
        className={classes.add_to_cart}
        onClick={showModalHandler}
      >
        Add to Cart
      </button>
      <Modal display={display} closeModal={closeModal}>
        <div className={classes.modal}>
          Hello Mr. Amit <br />
          Your total Price is {totalPrice.toFixed(2)} taka
        </div>
        <button type="button" className={classes.payment}>
          Palyment
        </button>
      </Modal>
    </div>
  );
};

export default Builder;
