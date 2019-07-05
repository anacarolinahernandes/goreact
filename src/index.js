import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  // é necessário usar a arrow function para o this referenciar a classe e não diretamente à função
  handleClick = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ counter: (this.state.counter += 1) });
  };

  render() {
    const { counter } = this.state;
    return (
      <Fragment>
        <h1 className="title">Hello, Rocketseat!</h1>
        <h2>{counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.querySelector('div#app'));
