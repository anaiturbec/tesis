import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import LogoutIcon from "../components/icons/LogoutIcon";
import RegisterModal from "../components/modals/RegisterModal";
import DataTable from "../components/DataTable";

function Dashboard() {
  const [openModal, setOpenModal] = React.useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = React.useState("");
  const navigate = useNavigate();

  //gets current user on load
  useEffect(() => {
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

  const signOut = async() => {
    try{
      logout()
    }catch(err) {
      console.log(err.message)
    } finally {
      if(!user){
        navigate("/")
      }
    }
  }

  return (
    <div className="w-full h-screen">
      <div className="w-full h-24 flex flex-row justify-center items-center bg-white drop-shadow-3xl">
        <div className="w-11/12 h-24 flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <p className="text-2xl text-black">Bienvenid@, </p>
            <div className="font-bold text-3xl text-red-500 ml-4">{name}</div>
          </div>
          <div className="flex flex-row gap-x-10">
            <button className="w-40 h-14 bg-red-500 text-white rounded-2xl drop-shadow-3xl hover:bg-white hover:text-red-500" onClick={()=> setOpenModal(true)}>Crear Empleado</button>
            <button className="w-40 h-14 bg-white drop-shadow-3xl rounded-2xl flex flex-row items-center justify-center font-semibold hover:text-red-500 text-black" onClick={signOut}>
              <LogoutIcon className="w-7 mr-2" />
              <p>Cerrar Sesión</p>
            </button>
          </div>
        </div>
      </div>
        <DataTable />
        
       <RegisterModal
        isOpen={openModal}
        close={() => {
          setOpenModal(false);
        }}
      />
     </div>
  );
}

export default Dashboard;