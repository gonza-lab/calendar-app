import Swal from 'sweetalert2';
import { fetchWithOutToken, fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLogin = (values) => {
  return async (dispatch) => {
    dispatch(startLoading());
    const res = await fetchWithOutToken('auth', values, 'POST');
    const { ok, name, token, id: uid } = await res.json();

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({ name, uid }));
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesion',
        text: 'Email o contraseña incorrectos.',
      });
    }
    dispatch(finishLoading());
  };
};

export const startRegister = (values) => {
  return async (dispatch) => {
    dispatch(startLoading());
    const res = await fetchWithOutToken('auth/register', values, 'POST');
    const { ok, name, token, id: uid, msg } = await res.json();

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({ name, uid }));
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado con exito',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error al registrarse',
        text: msg,
      });
    }
    dispatch(finishLoading());
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const res = await fetchWithToken('auth/renew', {});
    const { ok, token, name, uid } = await res.json();

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(login({ name, uid }));
    } else {
      dispatch(checkingFinish());
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

const logout = () => ({
  type: types.authLogout,
});
