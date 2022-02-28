import React, { Component } from 'react';
import Header from '../Components/Header';
import profileIcon from '../assets/images/profile-icon.svg';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header { ...this.props } { ...this } />
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
            >
              Editar perfil
            </button>
          </div>
          <h4 className="font-bold">Nome</h4>
          <p className="text-muted">User</p>
          <h4 className="font-bold">E-mail</h4>
          <p className="text-muted">email@gmail.com</p>
          <h4 className="font-bold">Descrição</h4>
          <p className="text-muted">
            Lorem ipsum pulvinar viverra ante leo etiam placerat ipsum congue
            justo nec vitae leo urna, amet tincidunt aptent neque primis massa lectus
            purus interdum class conubia semper. venenatis dapibus ultrices morbi sociosqu
            elementum nec interdum risus, donec in velit auctor cursus turpis facilisis
            torquenta, scelerisque magna in nam risus fermentum justo.
          </p>
        </section>
      </div>
    );
  }
}

export default Profile;
