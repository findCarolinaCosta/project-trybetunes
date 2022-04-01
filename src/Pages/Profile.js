import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import profileIcon from '../assets/images/profile-icon.svg';
import { Context } from '../context/ContextInfos';

function Profile(props) {
  const { history } = props;
  const { user, setUser } = useContext(Context);
  const userStore = JSON.parse(localStorage.getItem('user'));

  useEffect(() => !user.userName && userStore.userName && setUser({
    userName: userStore.userName,
    email: userStore.email,
    description: userStore.description,
    Image: userStore.image,
  }), [setUser, user.userName,
    userStore.description, userStore.email, userStore.image, userStore.userName]);

  return (
    <div data-testid="page-profile">
      <Header { ...props } { ...this } />
      <h1 className="font-bold text-1xl m-0 pb-7 pt-1 text-center">Profile</h1>
      <section className="p-5">
        <div className="flex justify-between pb-5">
          <img
            src={ profileIcon }
            alt="profile icon"
            className="w-28 rounded-full bg-gray-700"
          />
          <button
            type="button"
            className="btn btn-outline-danger h-10 self-center"
            onClick={ () => history.push('/profile/edit') }
          >
            Editar perfil
          </button>
        </div>
        <h4 className="font-bold">Nome</h4>
        <p className="text-muted">{user.userName || undefined}</p>
        <h4 className="font-bold">E-mail</h4>
        <p className="text-muted">{user.email || undefined}</p>
        <h4 className="font-bold">Descrição</h4>
        <p className="text-muted">{user.description || undefined}</p>
      </section>
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Profile;
