import { Component } from 'react';
import Section from 'components/Section';
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
          <Section title='Leave Feedback Please'>
          <FeedbackOptions onFeedbackClick={this.handleClick}/>
          </Section>
        </div>
      </>
    );
  }
}

export default Feedback;
