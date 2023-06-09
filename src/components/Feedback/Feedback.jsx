import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
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
          <FeedbackOptions onFeedbackClick={this.handleClick}/>
        </div>
      </>
    );
  }
}

export default Feedback;
