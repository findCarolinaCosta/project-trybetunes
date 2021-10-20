import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './LoadingMessage';

class Login extends Component {
  render() {
    const { loginuser, submitlogin, handleChange,
      checkInputName, entryCondition, history } = this.props;
    if (submitlogin) {
      return (
        <div data-testid="page-login">
          <form>
            <h1>Login</h1>
            <label htmlFor="login-name-input">
              <p> Digite seu nome</p>

              <input
                type="text"
                name="loginuser"
                id="login-name-input"
                data-testid="login-name-input"
                value={ loginuser }
                onChange={ handleChange }
              />
            </label>

            <button
              type="submit"
              data-testid="login-submit-button"
              disabled={ checkInputName() }
              onClick={ () => entryCondition(loginuser, history) }
            >
              Enviar

            </button>
          </form>
        </div>
      );
    }
    return <Loading />;
  }
}

Login.propTypes = {
  loginuser: PropTypes.string.isRequired,
  submitlogin: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  checkInputName: PropTypes.func.isRequired,
  entryCondition: PropTypes.func.isRequired,
};

export default Login;
