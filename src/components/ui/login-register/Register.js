import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startRegister } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';
import { Input } from './Input';

export const Register = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui); 

  const [values, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.rePassword) {
      Swal.fire('Oops', 'Las contraseñas no coinciden', 'error');
    } else {
      const { name, email, password } = values;
      dispatch(startRegister({ name, email, password }));
    }
  };

  return (
    <div className="ui-login animate__animated animate__fadeIn">
      <span className="ui-login__title">REGISTER</span>
      <form onSubmit={handleSubmit}>
        <div className="ui-login__input-group">
          <Input
            text="Nombre"
            name="name"
            type="text"
            handleInputChange={handleInputChange}
            value={values.name}
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
