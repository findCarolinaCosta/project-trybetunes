import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import Header from '../Components/Header';
import { Context } from '../context/ContextInfos';

function ProfileEdit(props) {
  const { history } = props;
  const { setUser } = useContext(Context);
  const userStore = JSON.parse(localStorage.getItem('user'));
  const [userName, setUserName] = useState(userStore.userName || '');
  const [email, setEmail] = useState(userStore.email || '');
  const [description, setDescription] = useState(userStore.description || '');

  const handleClick = () => {
    const userInfos = {
      userName,
      email,
      description,
    };
    setUser(userInfos);
    localStorage.setItem('user', JSON.stringify(userInfos));
    history.push('/profile');
  };

  return (
    <div data-testid="page-profile-edit">
      <Header { ...props } { ...this } />
      <h1 className="text-center">ProfileEdit</h1>
      <form className="w-full flex flex-col">
        <div className="mb-3 row">
          <label htmlFor="user" className="flex gap-2 justify-center">
            <p className="self-center m-0 col-sm-2">Name:</p>
            <input
              id="user"
              name="user"
              type="text"
              value={ userName }
              className="form-control
            form-control-sm rounded-3xl input-search w-2 col-sm-10"
              onChange={ (e) => setUserName(e.target.value) }
            />
          </label>
        </div>
        <div className="mb-3 row">
          <label htmlFor="email" className="flex gap-2 justify-center">
            <p className="self-center m-0 col-sm-2">E-mail:</p>
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              className="form-control
            form-control-sm rounded-3xl input-search col-sm-10"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="floatingTextarea2"
            className="flex gap-2 justify-center"
          >
            <p className="self-center m-0 col-sm-2">Descrição:</p>
            <textarea
              id="floatingTextarea2"
              name="description"
              className="form-control
          form-control rounded-3xl input-search"
              rows="3"
              value={ description }
              onChange={ (e) => setDescription(e.target.value) }
            />
          </label>
        </div>
        <button
          type="button"
          className="btn btn-outline-danger h-10 w-52 m-auto"
          onClick={ handleClick }
        >
          Confirmar edição
        </button>
      </form>
    </div>
  );
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ProfileEdit;
