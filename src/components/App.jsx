import React from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = e => {
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
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  statusFeedback = () => {
    return (
      this.state.good !== 0 || this.state.bad !== 0 || this.state.neutral !== 0
    );
  };
  render() {
    return (
      <div>
        <Section title={'Please leave Feedback'}>
          <FeedbackOptions
            countTotalFeedback={this.countFeedback}
            state={Object.keys(this.state)}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
            status={this.statusFeedback()}
          />
        </Section>
      </div>
    );
  }
}
