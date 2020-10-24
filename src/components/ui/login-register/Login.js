import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';
import { Input } from './Input';

export const Login = () => {
  const { isLoading } = useSelector((state) => state.ui); 
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(values));
  };

  return (
    <div className="ui-login animate__animated animate__fadeIn">
      <span className="ui-login__title">LOGIN</span>
      <form onSubmit={handleSubmit}>
        <div className="ui-login__input-group">
          <Input
            text="Email"
            type="email"
            handleInputChange={handleInputChange}
            value={values.email}
            i="fas fa-user"
          />
          <Input
            text="Password"
            type="password"
            handleInputChange={handleInputChange}
            value={values.password}
            i="fas fa-envelope"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          LOGIN
        </button>
      </form>
    </div>
  );
};
