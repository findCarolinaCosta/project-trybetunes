import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

export default async function EntryCondition(LoginUser, history) {
  this.setState({ SubmitLogin: false });
  await createUser({ name: LoginUser });
  history.push('../search');
}

EntryCondition.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
