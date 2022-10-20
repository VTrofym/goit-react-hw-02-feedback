import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import Statistics from '../Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  setGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  setNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  setBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'} >
          <FeedbackOptions
            setGood={this.setGood}
            setNeutral={this.setNeutral}
            setBad={this.setBad}
          />
        </Section>
        <Section  title={'Statistics'} >
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </Section>
      </>
    );
  }
}
