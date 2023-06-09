import { Component } from 'react';
import Section from './Section';
import Feedback from './Feedback';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Feedback onFeedbackClick={this.handleFeedbackClick} />
          <Statistics feedback={this.state} />
        </div>
      </div>
    );
  }
}
