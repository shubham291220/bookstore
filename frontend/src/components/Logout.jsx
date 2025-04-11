import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth()
const handelLogout=()=>{
    try{
setAuthUser({
    ...authUser,
    user:null,
});
localStorage.removeItem("Users");
toast.success("Logout Sucessfully !");

//for automatically reloade page


setTimeout(()=>{
  window.location.reload();

},2000);


    }
    catch(err){
        toast.err("Error:"+err.message);

        setTimeout(()=>{ },2000);

    }
};

  return (
    <div>
      <button className='px-2 py-1 bg-red-600 text-white rounded-md cursor-pointer'
      
     onClick={handelLogout} >Logout</button>
    </div>
  )
}

export default Logout
