import React, { useState,useEffect } from 'react';
import './Login.css';
import { useForm } from '../../hook/useForm';
import useAuthStore from '../../hook/useAuthStore';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';


const loginForm = {
  loginEmail: '',
  loginPassword: '',
}

const RegisterForm = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
}



const Login = () => {
  

  const { startLogin ,errorMessage} = useAuthStore();

  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginForm);

  const { registerName, registerEmail, registerPassword, onInputChange: onRegisterInputChange } = useForm(RegisterForm);


  const [isLoginActive, setIsLoginActive] = useState(true);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  }


  const registerSubmit = (event) => {
    event.preventDefault();
    console.log({
      registerName,
      registerEmail,
      registerPassword,
    });
  }

  useEffect(() => {
     if(errorMessage!== undefined) {
      Swal.fire('Error en la Autenticacion',errorMessage,'error');
     }

  }, [errorMessage])
  


  return (
    <div className="form-container">
      <div className="form-toggle">
        <button
          id="login-toggle"
          className={`toggle-btn ${isLoginActive ? 'active' : ''}`}
          onClick={() => setIsLoginActive(true)}
        >
          Iniciar sesión
        </button>
        <button
          id="register-toggle"
          className={`toggle-btn ${isLoginActive ? '' : 'active'}`}
          onClick={() => setIsLoginActive(false)}
        >
          Registrarse
        </button>
      </div>
      <form
        id="login-form"
        className={`form ${isLoginActive ? '' : 'hidden'}`}
        onSubmit={loginSubmit}
      >
        <h2>Iniciar sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="loginEmail" value={loginEmail} onChange={onLoginInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="loginPassword" value={loginPassword} onChange={onLoginInputChange} required />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <form
        id="register-form"
        className={`form ${isLoginActive ? 'hidden' : ''}`}
        onSubmit={registerSubmit}
      >




        <h2>Registrarse</h2>
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input type="text" id="name" name="registerName" value={registerName} onChange={onRegisterInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="registerEmail" value={registerEmail} onChange={onRegisterInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="registerPassword" value={registerPassword} onChange={onRegisterInputChange} required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );

}

export default Login;
