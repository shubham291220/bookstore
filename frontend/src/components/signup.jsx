import React from 'react'
import { Link,  Navigate,  useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

import toast from 'react-hot-toast';

import Login from './Login';

//for backend database
import axios from "axios";


function signup() {

  //to navigate home pag ecode
const location=useLocation()

const navigate=useNavigate();

const from=location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) =>   // console.log(data)
  ////connect to backend  Data base  
  {
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      }
  //  call API axio
  await axios.post("http://localhost:4001/user/signup",userInfo)
   .then((res)=>{

console.log(res.data)
if(res.data){
  // alert("SignUp Sucessfully")
  toast.success('SignUP Sucessfully !');
  navigate(from,{replace:true});
  
  

}
//store data in browser local storege
localStorage.setItem("Users",JSON.stringify(res.data.user));

   })
   .catch((error)=>{
   if(error.response){
    console.log(error)
    // alert("Error: "+error.response.data.message);
    toast.error('Error!'+error.response.data.message);
   }

   });
    };


  return (
  <>
  <div className='flex h-screen  items-center justify-center '>
  <div id="my_modal_3"  className=''>
  <div className="modal-box w-full">
    <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">

        <a href="/">✕</a>
        </button>
   
    <h3 className="font-bold text-lg">SignUp</h3>

    <div className='mt-4 space-y-2' >
<span >Nmae </span>
<br />

{/* //name */}
<input type="text" placeholder='Enter Your Full Nmae' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("fullname", { required: true })}/>
<br />
{errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
 </div>

 

    {/* email */}
    <div className='mt-4 space-y-2' >
<span >Email</span>
<br />
<input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })} />
<br />
{errors.email && <span className='text-sm text-red-500'>This field is required</span>}
 </div>


{/* password */}
 <div className='mt-4 space-y-2' >
<span >Password</span>
<br />
<input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}/>
<br />
{errors.password && <span className='text-sm text-red-500'>This field is required</span>}
 </div>

 <div className='flex justify-around mt-6'>
<button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
<p>Have Account ? 
    

    <a href='/' className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" 
    
    onClick={()=>
      document.getElementById("my_modal_3").showModal()


    }
    >
      Login</a>
      <Login />
 
  
    </p>
</div>

</form>


  </div>
</div>
  </div>
  </>
  )
}

export default signup
