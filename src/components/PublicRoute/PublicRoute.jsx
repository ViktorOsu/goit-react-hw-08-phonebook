import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelector';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {
  const authToken = useSelector(selectToken);
  if (authToken) {
    return <Navigate to="/contacts" />;
  }
  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
