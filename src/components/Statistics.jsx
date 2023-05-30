export const Statistics = ({
  good,
  neutral,
  bad,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
      </div>
    </div>
  );
};
