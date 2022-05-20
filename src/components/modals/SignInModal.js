import React, {useEffect} from 'react';
import Modal from './Modal';
import CloseIcon from '../icons/CloseIcon';
import { useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, db} from "../../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingIcon from '../icons/LoadingIcon';

export default function SignInModal({isOpen, close}) {
  //States
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [load, setLoad] = React.useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  //function that works on rendering, if authentication takes long to load, loading icon appears spinning on button
  //once user is authenticated it navigates to admin page
  useEffect(() => {
    if (loading) {
      setLoad(true);
      return;
    }
    const fetchType  = async() => {
      try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      if(data.userType === "admin"){
        navigate("/dashboard");
      } else {
        navigate("/employee");
      }
      } catch (err) {
        console.log(err);
      }
    } 
    if (user){ 
      fetchType();
    }

  }, [user, loading, navigate]);

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
          <form className="">
            <label className="block mt-8 font-display md:text-base text-xs text-start">
              <span>Correo Electrónico</span>
              <input
                className="w-full md:h-10  border-[1px] bg-gray-200 rounded-lg outline-none pl-2"
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
                className="w-full md:h-10 border-[1px] bg-gray-200 rounded-lg outline-none pl-2"
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
              <button
                className="bg-gray-900 rounded-md shadow-xl py-2 w-full mt-10 mb-20 h-10 drop-shadow-3xl font-display md:text-md hover:bg-red-500 items-center justify-center"
                type="button"
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                {load ? (<p className="text-white font-display text-xs">INICIAR SESIÓN</p>):(<LoadingIcon className="w-7 animate-spin text-white" />)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}