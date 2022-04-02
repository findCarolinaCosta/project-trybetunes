import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Header from '../Components/Header';
import profileIcon from '../assets/images/profile-icon.svg';
import { Context } from '../context/ContextInfos';

function Profile(props) {
  const { history } = props;
  const { user } = useContext(Context);

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
        <p className="text-muted">{user.userName}</p>
        <h4 className="font-bold">E-mail</h4>
        <p className="text-muted">{user.email}</p>
        <h4 className="font-bold">Descrição</h4>
        <p className="text-muted">{user.description}</p>
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
