import React from 'react';
import classes from './Juce.module.css';
import JuiceFlavours from './JuiceFlavours/JuiceFlavours';

const Juce = ({ itemCount }) => {
  return (
    <div className={classes.juce_glass}>
      <JuiceFlavours itemCount={itemCount} />
    </div>
  );
};

export default Juce;
