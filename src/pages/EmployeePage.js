import React, { useEffect } from 'react';
import LogoutIcon from '../components/icons/LogoutIcon';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function EmployeePage(props) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  
  useEffect(()=>{
    if (!user) return navigate("/");
    if (loading) return;
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserName();
  }, [loading, navigate, user]);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-24 flex flex-row justify-center items-center bg-white drop-shadow-3xl">
        <div className="w-11/12 h-24 flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <p className="text-2xl text-black">Bienvenid@, </p>
          <div className="font-bold text-3xl text-red-500 ml-4">{name}</div>
        </div>
          <div className="flex flex-row gap-x-10">
            <button className="w-40 h-14 bg-white drop-shadow-3xl rounded-2xl flex flex-row items-center justify-center font-semibold hover:text-red-500 text-black" onClick={logout}>
              <LogoutIcon className="w-7 mr-2" />
              <p>Cerrar Sesión</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] flex items-center justify-center">
        <div className="bg-red-500 drop-shadow-3xl p-20 rounded-xl">
          <p className="text-3xl text-white font-bold">Esta es la página de empleado!</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeePage;