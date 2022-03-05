import { connect } from 'react-redux';
import { createUser } from '../services/userAPI';

async function entryCondition({ e, props }) {
  console.log(props, 'entryCondition');
  const { user } = props;
  e.preventDefault();
  dispatch(getLogin(true));
  this.setState({ redirect: true });
  await createUser({ name: user });
}

const mapStateToProps = (state) => {
  console.log(state, 'entryCondition');
  return ({
    user: state.login.user,
    submit: state.login.submit,
  });
};

export default connect(mapStateToProps)(entryCondition);
