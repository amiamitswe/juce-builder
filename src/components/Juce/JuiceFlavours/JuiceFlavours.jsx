import React from 'react';
import classes from './JuiceFlavours.module.css';

const JuiceFlavours = ({ itemCount }) => {
  return (
    <div className={classes.juice_flavours}>
      <div className={[classes.suger, 'juce_item'].join(' ')}>suger</div>

      {itemCount.map((itme) => (
        <div
          key={[itme, Math.random()].join(' ')}
          className={[classes[itme], 'juce_item'].join(' ')}
        >
          {itme}
        </div>
      ))}
      <div className={[classes.solt, 'juce_item'].join(' ')}>Solt</div>
      <div className={[classes.lemon, 'juce_item'].join(' ')}>lemon</div>
    </div>
  );
};

export default JuiceFlavours;
