import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from './LoadingMessage';

class Login extends Component {
  render() {
    const { loginuser, submitlogin, handleChange,
      checkInputName, entryCondition, redirect } = this.props;

    if (redirect) {
      return <Redirect to="/search" />;
    }

    if (submitlogin) {
      return (
        <>
          <div className="flex justify-between w-full p-3 header fixed">
            <p className="font-bold text-2xl text-white p-2 logo-title">TrybeTunes</p>
          </div>
          <div data-testid="page-login" className="flex justify-center h-screen w-full">
            <div className="items-center m-auto container-login pt-28 pb-28 rounded-3xl">
              <form
                className="row g-3 needs-validation"
              >
                <h1 className="text-center font-bold">Login</h1>
                <div className="text-center">
                  <label htmlFor="login-name-input" className="form-label">
                    <p> Digite seu nome</p>
                    <input
                      type="text"
                      name="loginuser"
                      id="login-name-input"
                      data-testid="login-name-input"
                      value={ loginuser }
                      onChange={ handleChange }
                      className="form-control form-control-sm rounded-3xl"
                    />
                  </label>
                </div>
                <div className="w-full text-center">
                  <button
                    type="submit"
                    data-testid="login-submit-button"
                    disabled={ checkInputName() }
                    onClick={ (e) => entryCondition(e) }
                    className="btn btn-primary m-auto"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      );
    }
    return <Loading />;
  }
}

Login.propTypes = {
  loginuser: PropTypes.string.isRequired,
  submitlogin: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  checkInputName: PropTypes.func.isRequired,
  entryCondition: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
};

export default Login;
