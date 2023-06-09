import { Component } from 'react';
import Feedback from './Feedback';
import Statistics from './Statistics';
import NotificationMessage from './NotificationMessage';

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
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const isFeedbackGiven = totalFeedback > 0;

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

          {isFeedbackGiven ? (
            <Statistics feedback={this.state} />
          ) : (
            <NotificationMessage />
          )}
        </div>
      </div>
    );
  }
}
