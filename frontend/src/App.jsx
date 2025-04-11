import React from "react";
import Home from "./dome/Home";
import Courses from "./courses/courses";
import Signup from "./components/signup";

import { useAuth } from "./context/AuthProvider";



import  {Navigate, Route,Routes} from "react-router-dom";


import toast, { Toaster } from 'react-hot-toast';


function App(){
  //
  const [authUser,setAuthUser]=useAuth();
console.log(authUser);
  return(
    <>
    <Routes>

<Route path="/" element={
  <Home />
  }/>
<Route path="/course" element={authUser?<Courses/> : <Navigate to="/signup" />}/>

  


<Route path="/signup" element={<Signup />} />

   

   

    </Routes>

    <Toaster />
    
    </>
  );
}
export default App;





