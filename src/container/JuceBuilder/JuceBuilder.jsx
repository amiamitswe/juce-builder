import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import Juce from '../../components/Juce/Juce';
import classes from './JuceBuilder.module.css';

class JuceBuilder extends Component {
  state = {
    juceItems: {},
    totalPrice: 0,
    itemCount: [],
    display: 'none',
  };

  componentDidMount = () => {
    console.log('componentDidMount');
    fetch('https://react-project-4817f.firebaseio.com/juce.json')
      .then((response) => response.json())
      .then((responseData) => this.setState({ juceItems: responseData }));
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

  showModalHandler = () => {
    this.setState({ display: 'block' });
  };

  closeModalHandler = () => {
    this.setState({ display: 'none' });
  };

  render() {
    const { juceItems, totalPrice, itemCount, display } = this.state;
    return (
      <div className={[classes.main, 'd-flex'].join(' ')}>
        <Juce itemCount={itemCount} />
        <Builder
          juceItems={juceItems}
          totalPrice={totalPrice}
          itemCount={itemCount}
          addItemHandler={this.addItemHandler}
          removeItemHandler={this.removeItemHandler}
          display={display}
          showModalHandler={this.showModalHandler}
          closeModal={this.closeModalHandler}
        />
      </div>
    );
  }
}

export default JuceBuilder;
