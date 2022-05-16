import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../config/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import LogoutIcon from "../components/icons/LogoutIcon";
import RegisterModal from "../components/modals/RegisterModal";
import userCard from "../components/cards/userCard";

function Admin() {
  const [openModal, setOpenModal] = React.useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = React.useState("");
  const [userData, setUserData] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occurred while fetching user data");
      }
    };
    fetchUserName();
    getUsers();
  }, []);

  //function to save all user info into a list that can be mapped
  const getUsers = async() =>{
    const userData = []
    db.collection('users').get().then((querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        userData.push({
          name: doc.data().name,
          lastName: doc.data().lastName,
          job: doc.data().job,
          dni: doc.data().dni,
          email: doc.data().email,
        })
      })
      setUserData(userData);
      console.log(userData);
    })
  }

  return (
    <div className="w-full h-screen">
       <div className="w-full h-24 flex flex-row justify-between items-center bg-white drop-shadow-3xl">
          <div className="flex flex-row ml-20">
            <p className="text-2xl text-black">Bienvenid@, </p>
            <div className="font-bold text-3xl text-red-500 ml-4">{name}</div>
          </div>
          <div className="flex flex-row gap-x-10 mr-20">
            <button className="w-40 h-14 bg-red-500 text-white rounded-2xl drop-shadow-3xl hover:bg-white hover:text-red-500" onClick={()=> setOpenModal(true)}>Crear Empleado</button>
            <button className="w-40 h-14 bg-white drop-shadow-3xl rounded-2xl flex flex-row items-center justify-center font-semibold hover:text-white hover:bg-red-500 text-red-500" onClick={logout}>
              <LogoutIcon className="w-7 mr-2" />
              <p>Cerrar Sesión</p>
            </button>
          </div>
       </div>
       <div>
         {
           userData.map((data) => (
            <userCard name={data.name} lastName={data.lastName} job={data.job} dni={data.dni} email={data.email} />
           ))
         }
       </div>
       <RegisterModal
        isOpen={openModal}
        close={() => {
          setOpenModal(false);
        }}
      />
     </div>
  );
}
export default Admin;