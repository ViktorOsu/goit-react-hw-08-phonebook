import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelector';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
  const authToken = useSelector(selectToken);
  if (!authToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
