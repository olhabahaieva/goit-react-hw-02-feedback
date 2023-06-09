import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createStats({
      good: this.state.good,
      neutral: this.state.neutral,
      bad: this.state.bad,
    });
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    return (
      <>
        <div className={css.feedback}>
          <h1 className={css.heading}>Please leave feedback</h1>
          <form onSubmit={this.handleSubmit} className={css.buttonContainer}>
            <button
              name="good"
              type="submit"
              onClick={this.handleClick}
              className={css.button}
              value={this.state.good}
            >
              Good
            </button>
            <button
              name="neutral"
              type="submit"
              onClick={this.handleClick}
              className={css.button}
              value={this.state.neutral}
            >
              Neutral
            </button>
            <button
              name="bad"
              type="submit"
              onClick={this.handleClick}
              className={css.button}
              value={this.state.bad}
            >
              Bad
            </button>
          </form>
          <div className={css.stats} />
          <h2 className={css.heading}>Statistics</h2>
          <div>
            <p className={css.text}>Good: 0</p>
            <p className={css.text}>Neutral: 0</p>
            <p className={css.text}>Bad: 0</p>
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
