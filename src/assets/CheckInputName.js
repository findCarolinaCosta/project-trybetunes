import { connect } from 'react-redux';

function checkInputName() {
  const { user } = props;
  const minimumCharacters = 3;
  const result = user.length < minimumCharacters;
  return result;
}

const mapStateToProps = (state) => ({
  user: state.login.user,
});

export default connect(mapStateToProps)(checkInputName);
