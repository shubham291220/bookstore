import React from "react";
import Home from "./dome/Home";
import Courses from "./courses/courses";
import Signup from "./components/signup";



import {Route,Routes} from "react-router-dom";
function App(){
  return(
    <>
    <Routes>

<Route path="/" element={
  <Home />
  }/>
<Route path="/course" element={
  <Courses/>
  
  }/>

<Route path="/signup" element={<Signup />} />

   

   

    </Routes>
    
    </>
  );
}
export default App;





