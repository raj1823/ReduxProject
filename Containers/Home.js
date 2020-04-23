import {connect} from 'react-redux';
import HomeComponent from '../Components/HomeComponent';
import toggleFlag from '../Services/action';

import authenticateUser from '../authenticateUser';

const mapStateToProps = state => ({
  error: state.authenticate_Reducer.error,

  success: state.authenticate_Reducer.success,

  token: state.authenticate_Reducer.token,
  query: state.authenticate_Reducer.queryData
});

const mapDispatchToProps = ({
  isAuthenticatedUser: authenticateUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
