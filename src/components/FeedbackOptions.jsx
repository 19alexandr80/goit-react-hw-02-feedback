import PropTypes from 'prop-types';

import {
  FeedbackOptionsStyled,
  FeedbackButtonsStyled,
  FeedbackTitleStyled,
} from 'components/styled/FeedbackStyled.styled';

export const FeedbackOptions = ({ countTotalFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      <FeedbackTitleStyled>Please leave Feedback</FeedbackTitleStyled>
      <FeedbackButtonsStyled>
        <button type="button" name="good" onClick={countTotalFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={countTotalFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={countTotalFeedback}>
          Bad
        </button>
      </FeedbackButtonsStyled>
    </FeedbackOptionsStyled>
  );
};
FeedbackOptions.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
};
