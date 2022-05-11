import React from 'react';
import Modal from './Modal';
import CloseIcon from '../icons/closeIcon';
import Firebase from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';

//initializing Firebase Auth
const auth = Firebase.auth();


export default function SignInModal({isOpen, close}) {
  //States
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  let navigate = useNavigate();

  //Function to authenticate user using Firebase Auth when you submit the form (bugs)
  const onSubmit = async() => {
    try {
      setDisabled(true);
      if (email !== '' && password !== '') {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setDisabled(false);
      navigate('admin');
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      className="md:w-2/6 w-4/5 rounded-lg md:h-auto h-3/6"
    >
      <div className="flex flex-col w-full justify-center">
        <button
          type="button"
          className="flex text-text-black hover:text-neutral-500 self-start p-3"
          onClick={close}
        >
          <CloseIcon className="w-7 hover:text-pink" />
        </button>
        <div className="flex w-full h-full justify-center items-center flex-col">
          <img alt="logo" className="w-20 mt-10" src="logo.svg" />
          <form className="" onSubmit={onSubmit}>
            <label className="block mt-8 font-display md:text-base text-xs text-start">
              <span>Correo Electrónico</span>
              <input
                className="w-full md:h-8 h-7 border-black border-[1px] bg-white outline-none "
                type="text"
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                required
              />
            </label>
            <label className="block md:mb-8 mb-4 md:mt-6 mt-3 font-display md:text-base text-xs">
              <span>Contraseña</span>
              <input
                className="w-full md:h-8 h-7 border-black border-[1px] bg-white outline-none "
                type="password"
                value={password}
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
                required
              />
            </label>
            <div className="w-full items-center flex flex-col flex-wrap">
            {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
              <button
                className="bg-black rounded-md shadow-xl py-2 w-full mt-10 mb-20 h-10 drop-shadow-3xl text-white font-display md:text-md hover:bg-red-500 text-xs"
                type="submit"
                disabled={disabled}
              >
                INICIAR SESIÓN
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}