import { connect } from 'react-redux';

function handleChange({ target }) {
  const { name, value } = target;
  dispatch(getUser(value));
  this.setState({ [name]: value });
}

export default connect()(handleChange);
