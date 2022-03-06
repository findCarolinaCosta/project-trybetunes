import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import checkInputName from '../assets/CheckInputName';
import entryCondition from '../assets/EntryCondition';
import { getUser } from '../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to="/search" />;
  }
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
                  name="user"
                  id="login-name-input"
                  data-testid="login-name-input"
                  value={ user }
                  onChange={ (e) => setUser(e.target.value) }
                  className="form-control form-control-sm rounded-3xl"
                />
              </label>
            </div>
            <div className="w-full text-center">
              <button
                type="submit"
                data-testid="login-submit-button"
                disabled={ checkInputName(user) }
                onClick={ (e) => {
                  entryCondition(e, user);
                  dispatch(getUser({ user }));
                  setRedirect(true);
                } }
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

export default Login;
