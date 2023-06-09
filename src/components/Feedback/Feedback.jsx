import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleClick = e => {
    const buttonName = e.target.name;
    this.setState(
      prevState => ({
        [buttonName]: prevState[buttonName] + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({ total });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percent = total > 0 ? (good / total).toFixed(2) * 100 : 0;
    this.setState({ percent });
  };

  render() {
    return (
      <>
        <div className={css.feedback}>
          <h1 className={css.heading}>Please leave feedback</h1>
          <div className={css.buttonContainer}>
            <button
              name="good"
              type="submit"
              onClick={this.handleClick}
              className={css.button}
            >
              Good
            </button>
            <button
              name="neutral"
              type="submit"
              onClick={this.handleClick}
              className={css.button}
            >
              Neutral
            </button>
            <button
              name="bad"
              type="submit"
              onClick={this.handleClick}
              className={css.button}
            >
              Bad
            </button>
          </div>
          <div className={css.stats} />
          <h2 className={css.heading}>Statistics</h2>
          <div>
            <p className={css.text}>Good: {this.state.good}</p>
            <p className={css.text}>Neutral: {this.state.neutral}</p>
            <p className={css.text}>Bad: {this.state.bad}</p>
            <p className={css.text}>Total: {this.state.total}</p>
            <p className={css.text}>Positive Feedback: {this.state.percent}%</p>
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
