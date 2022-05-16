import React from 'react';
import Modal from './Modal';
import  {registerWithEmailAndPassword}  from '../../config/firebase';
import CloseIcon from '../icons/CloseIcon';

function RegisterModal({isOpen, close}) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [job, setJob] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dni, setDni] = React.useState('');
  return (
    <Modal
      isOpen={isOpen}
      className="md:w-3/6 w-5/6 rounded-lg md:h-auto h-3/6"
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
          <form className="flex flex-col">
            <div className="flex flex-row gap-x-5">
              <label className="flex flex-col items-start mt-8 font-display md:text-base text-xs text-start">
                <span>Nombre</span>
                  <input
                    className="w-full md:h-8 h-7 border-black border-[1px] bg-white outline-none"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      e.preventDefault();
                      setName(e.target.value);
                    }}
                    required
                  />
              </label>
              <label className="flex flex-col items-start mt-8 font-display md:text-base text-xs text-start">
                <span>Apellido</span>
                  <input
                    className="w-full md:h-8 h-7 border-black border-[1px] bg-white outline-none"
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      e.preventDefault();
                      setLastName(e.target.value);
                    }}
                    required
                  />
              </label>
            </div>
            <label className="flex flex-col items-start mt-8 font-display md:text-base text-xs text-start">
                <span>Correo Electrónico</span>
                  <input
                    className="w-full md:h-8 h-7 border-black border-[1px] bg-white outline-none"
                    type="text"
                    value={email}
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                    }}
                    required
                  />
              </label>
              <label className="flex flex-col items-start mt-8 font-display md:text-base text-xs text-start">
                <span>Contraseña del empleado</span>
                  <input
                    className="w-full md:h-8 h-7 border-black border-[1px] bg-white outline-none"
                    type="text"
                    value={password}
                    onChange={(e) => {
                      e.preventDefault();
                      setPassword(e.target.value);
                    }}
                    required
                  />
              </label>
              <div className="flex flex-row gap-x-5">
              <label className="flex flex-col items-start mt-8 font-display md:text-base text-xs text-start">
                <span>D.N.I</span>
                  <input
                    className="w-full md:h-8 h-7 border-black border-[1px] bg-white outline-none"
                    type="text"
                    value={dni}
                    onChange={(e) => {
                      e.preventDefault();
                      setDni(e.target.value);
                    }}
                    required
                  />
              </label>
              <label className="flex flex-col items-start mt-8 font-display md:text-base text-xs text-start">
                <span>Cargo</span>
                  <input
                    className="w-full md:h-8 h-7 border-black border-[1px] bg-white outline-none"
                    type="text"
                    value={job}
                    onChange={(e) => {
                      e.preventDefault();
                      setJob(e.target.value);
                    }}
                    required
                  />
              </label>
            </div>
            <div className="w-full items-center flex flex-col flex-wrap">
              <button
                className="bg-black text-white rounded-md shadow-xl py-2 w-full mt-10 mb-20 h-10 drop-shadow-3xl font-display md:text-md hover:bg-red-500 items-center justify-center"
                type="button"
                onClick={() => registerWithEmailAndPassword(name, email, password, job, lastName, dni)}
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default RegisterModal;