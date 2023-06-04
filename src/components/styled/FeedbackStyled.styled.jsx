import styled from '@emotion/styled';

export const FeedbackOptionsStyled = styled.div`
  background-color: cadetblue;
  border: 3px outset;
  padding: 50px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
`;
export const FeedbackButtonsStyled = styled.div`
  display: flex;
  gap: 20px;
  button {
    border: 3px outset;
    padding: 10px;
    font-size: 24px;
    border-radius: 10px;
    background-color: cadetblue;
    cursor: pointer;
    :hover {
      background-color: red;
    }
    :active {
      background-color: green;
    }
  }
`;
