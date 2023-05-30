import PropTypes from 'prop-types';

import { Notification } from 'components/Notification';
import {
  StatisticsStyled,
  StatisticsDataStyled,
  StatisticsParagraphStyled,
} from 'components/styled/StatisticsStyled.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
  total,
  status,
}) => {
  return (
    <StatisticsStyled>
      <h2>Statistics</h2>
      {status ? (
        <StatisticsDataStyled>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <StatisticsParagraphStyled count={countPositiveFeedbackPercentage()}>
            Positive feedback: {countPositiveFeedbackPercentage()}%
          </StatisticsParagraphStyled>
        </StatisticsDataStyled>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StatisticsStyled>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
};
