import React, {useEffect} from 'react';
import { db } from "../config/firebase";
import { query, collection, doc, getDocs, where, updateDoc} from "firebase/firestore";
import DeleteIcon from './icons/DeleteIcon';

function DataTable() {
  const [userData, setUserData] = React.useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  //function to save all user info into a list that can be mapped
  const getUsers = async() =>{
    const userData = []
    const q = query(collection(db, "users"));
    const d = await getDocs(q);
    // Searches every doc in db
    for(let i = 0; i < d.docs.length; i++) {
      // Only adds doc to list if active boolean is set to true
      if(d.docs[i].data().active === true){
        userData.push(d.docs[i].data());
      }
    }
    setUserData(userData); 
  }

  //deactivates user when you press delete button
  const deactivateUser = async(uid) => {
    // finds the document that contains the user with this uid
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const d = await getDocs(q);
    const document = d.docs[0].id
    // sets value of active boolean field to false
    const qr = doc(db, "users", document);
    await updateDoc(qr, {active: false});
    //refreshes page
    window.location.reload(true);
  }

  //sets Type of user to desired value
  const setType = async(value, uid) => {
    // finds the document that contains the user with this uid
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const d = await getDocs(q);
    const document = d.docs[0].id
    // sets value of userType to chosen value in selector
    const qr = doc(db, "users", document);
    await updateDoc(qr, {userType: value});
  }
  
  return (
    <div className="w-full flex justify-center mt-20 pb-20">
      <div className="w-10/12 flex flex-col rounded-xl drop-shadow-3xl overflow-clip items-center bg-white">
      <div className="w-full h-16 items-center ml-5 mr-5 flex flex-row bg-red-500 mr-13 justify-evenly">
          <div className="w-1/6 flex justify-center">
            <p className="font-bold text-white text-xl">Nombre</p>
          </div>
          <div className="w-1/6 flex justify-center">
            <p className="font-bold text-white text-xl">Apellido</p>
          </div>
          <div className="w-1/6 flex justify-center">
            <p className="font-bold text-white text-xl">Cargo</p>
          </div>
          <div className="w-1/6 flex justify-center">
            <p className="font-bold text-white text-xl">D.N.I</p>
          </div>
          <div className="w-1/6 flex justify-center">
            <p className="font-bold text-white text-xl">Correo</p>
          </div>
          <div className="w-1/6 flex justify-center">
            <p className="font-bold text-white text-xl">Tipo</p>
          </div>
          <div className="w-1/12" />
      </div>
        {
        userData.map((data)=>(
          <div className="w-full h-20 items-center ml-5 mr-5 flex flex-col justify-center" key={data.uid}>
            <div className="flex flex-row w-full justify-evenly">
              <div className="w-1/6 flex justify-center">
                <p>{data.name}</p>
              </div>
              <div className="w-1/6 flex justify-center">
                <p>{data.lastName}</p>
              </div>
              <div className="w-1/6 flex justify-center">
                <p>{data.job}</p>
              </div>
              <div className="w-1/6 flex justify-center">
                <p>{data.dni}</p>
              </div>
              <div className="w-1/6 flex justify-center">
                <p>{data.email}</p>
              </div>
              <div className="w-1/6 flex justify-center">
                <select
                defaultValue={data.userType}
                onChange={(e)=> setType(e.target.value, data.uid)}
                className="bg-gray-200 w-3/4 rounded-lg pl-3 outline-none"
                >
                  <option value="admin">Admin</option>
                  <option value="empleado">Empleado</option>
                </select>
              </div>
              <div className="w-1/12 flex justify-center">
                <button 
                  className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex items-center justify-center"
                  onClick={()=> deactivateUser(data.uid)}
                >
                  <DeleteIcon className="w-5" />
                </button>
              </div>
            </div>
            <div className="h-[1px] w-[95%] bg-gray-200 mt-4" />
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default DataTable;