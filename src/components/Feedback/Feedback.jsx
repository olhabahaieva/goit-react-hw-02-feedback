import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  handleClick = (buttonName) => {
    this.props.onFeedbackClick(buttonName);
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
              onClick={() => this.handleClick('good')}
              className={css.button}
            >
              Good
            </button>
            <button
              name="neutral"
              type="submit"
              onClick={() => this.handleClick('neutral')}
              className={css.button}
            >
              Neutral
            </button>
            <button
              name="bad"
              type="submit"
              onClick={() => this.handleClick('bad')}
              className={css.button}
            >
              Bad
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
