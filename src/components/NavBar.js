import React from 'react';
import { Link } from 'react-router-dom';
import SignInModal from './modals/SignInModal';

export default function NavBar() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div className="w-full h-40 flex flex-row items-center z-20 absolute">
      <img className="w-24 h-24 ml-20" src="logo.svg" alt="navLogo" />
      <div className="flex flex-row items-center gap-x-20 w-full justify-end">
        <Link to='admin'><span className="flex text-xl text-white hover:text-black">Acerca ETG</span></Link>
        <Link to='/admin'><span className="flex text-xl text-white hover:text-black">Destinos</span></Link>
        <Link to='/admin'><span className="flex text-xl text-white hover:text-black">Sostenibilidad</span></Link>
        <Link to='/admin'><span className="flex text-xl text-white hover:text-black">Contacto</span></Link>
        <button 
          type="button" 
          className="flex w-28 h-10 bg-white text-black rounded-2xl mr-20 items-center justify-center hover:bg-black hover:text-white" 
          onClick={() => setOpenModal(true)} 
        >
          Acceder
        </button>
      </div>
      <SignInModal
        isOpen={openModal}
        close={() => {
          setOpenModal(false);
        }}
      />
    </div>
  );
}
