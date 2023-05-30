export const FeedbackOptions = ({ countTotalFeedback }) => {
  return (
    <div>
      <h2>Please leave Feedback</h2>
      <div>
        <button type="button" name="good" onClick={countTotalFeedback}>
          Good
        </button>
        <button type="button" name="neutral" onClick={countTotalFeedback}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={countTotalFeedback}>
          Bad
        </button>
      </div>
    </div>
  );
};
