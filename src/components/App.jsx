import React from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };
  countPositiveFeedbackPercentage = () => {
    return this.state.good /
      (this.state.good + this.state.bad + this.state.neutral)
      ? Math.round(
          (this.state.good /
            (this.state.good + this.state.bad + this.state.neutral)) *
            100
        )
      : 0;
  };
  render() {
    return (
      <div>
        <FeedbackOptions
          countTotalFeedback={this.countTotalFeedback}
          state={this.state}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.good + this.state.neutral + this.state.bad}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
          status={
            this.state.good !== 0 ||
            this.state.bad !== 0 ||
            this.state.neutral !== 0
          }
        />
      </div>
    );
  }
}
