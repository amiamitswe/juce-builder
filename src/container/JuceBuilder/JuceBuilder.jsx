import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import Juce from '../../components/Juce/Juce';
import classes from './JuceBuilder.module.css';

class JuceBuilder extends Component {
  state = {
    juceItems: {
      strawberry: 200,
      orange: 100,
      lychee: 150,
      mango: 120,
      solt: 10,
    },
    totalPrice: 0,
    itemCount: [],
  };

  componentDidMount = () => {
    console.log('componentDidMount');
  };

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  };

  addItemHandler = (item) => {
    const { itemCount, juceItems } = this.state;
    const totalItemCount = [...itemCount];
    totalItemCount.push(item);
    this.setState((preState) => {
      return {
        itemCount: totalItemCount,
        totalPrice: preState.totalPrice + juceItems[item],
      };
    });
  };

  removeItemHandler = (item) => {
    const { itemCount, juceItems } = this.state;
    const totalItemCount = [...itemCount];
    const itemIndex = totalItemCount.findIndex((fi) => fi === item);
    console.log(itemIndex);
    if (itemIndex >= 0) {
      totalItemCount.splice(itemIndex, 1);

      this.setState((preState) => {
        return {
          itemCount: totalItemCount,
          totalPrice: preState.totalPrice - juceItems[item],
        };
      });
    }
  };

  render() {
    const { juceItems, totalPrice, itemCount } = this.state;
    return (
      <div className={[classes.main, 'd-flex'].join(' ')}>
        <Juce itemCount={itemCount} />
        <Builder
          juceItems={juceItems}
          totalPrice={totalPrice}
          itemCount={itemCount}
          addItemHandler={this.addItemHandler}
          removeItemHandler={this.removeItemHandler}
        />
      </div>
    );
  }
}

export default JuceBuilder;
