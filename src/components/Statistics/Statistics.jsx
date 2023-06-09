import { Component } from 'react';
import Section from 'components/Section';
import css from './Statistics.module.css';

class Statistics extends Component {
  
  render() {
    const { good, neutral, bad } = this.props.feedback;
    const total = good + neutral + bad;
    const percent = total > 0 ? ((good / total) * 100).toFixed(0) : 0;

    return (
      <>
        <div className={css.stats} />
        <Section title='Statistics'>
        
          <p className={css.text}>Good: {good}</p>
          <p className={css.text}>Neutral: {neutral}</p>
          <p className={css.text}>Bad: {bad}</p>
          <p className={css.text}>Total: {total}</p>
          <p className={css.text}>Positive Feedback: {percent}%</p>
        
        </Section>
      </>
    );
  }
}

export default Statistics;
