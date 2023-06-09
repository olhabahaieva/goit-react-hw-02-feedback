import { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  handleClick = buttonName => {
    this.props.onFeedbackClick(buttonName);
  };

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default FeedbackOptions;
