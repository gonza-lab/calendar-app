import React from 'react';
import { useForm } from '../../../hooks/useForm';
import { Input } from './Input';

export const Register = () => {
  const isLoading = false; //Cambiar

  const [values, handleInputChange] = useForm({
    nombre: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ui-login animate__animated animate__fadeIn">
      <span className="ui-login__title">REGISTER</span>
      <form onSubmit={handleSubmit}>
        <div className="ui-login__input-group">
          <Input
            text="Nombre"
            type="text"
            handleInputChange={handleInputChange}
            value={values.nombre}
            i="fas fa-user-circle"
          />
          <Input
            text="Email"
            type="email"
            handleInputChange={handleInputChange}
            value={values.email}
            i="fas fa-envelope"
          />
          <Input
            text="Contraseña"
            name="password"
            type="password"
            handleInputChange={handleInputChange}
            value={values.password}
            i="fas fa-key"
          />
          <Input
            text="Repita la contraseña"
            name="rePassword"
            type="password"
            handleInputChange={handleInputChange}
            value={values.rePassword}
            i="fas fa-key"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          REGISTRAR
        </button>
      </form>
    </div>
  );
};
