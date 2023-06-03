import PropTypes from 'prop-types';

import {
  FeedbackOptionsStyled,
  FeedbackButtonsStyled,
  FeedbackTitleStyled,
} from 'components/styled/FeedbackStyled.styled';

export const FeedbackOptions = ({ countTotalFeedback, state }) => {
  return (
    <FeedbackOptionsStyled>
      <FeedbackTitleStyled>Please leave Feedback</FeedbackTitleStyled>
      <FeedbackButtonsStyled>
        {Object.keys(state).map(el => {
          return (
            <button
              key={el}
              type="button"
              name={el}
              onClick={countTotalFeedback}
            >
              {el}
            </button>
          );
        })}
      </FeedbackButtonsStyled>
    </FeedbackOptionsStyled>
  );
};
FeedbackOptions.propTypes = {
  countTotalFeedback: PropTypes.func.isRequired,
};
