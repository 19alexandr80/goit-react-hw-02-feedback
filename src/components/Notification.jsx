import PropTypes from 'prop-types';

import { NotificationStyled } from 'components/styled/NotificationStyled.styled';

export const Notification = ({ message }) => {
  return <NotificationStyled>{message}</NotificationStyled>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
