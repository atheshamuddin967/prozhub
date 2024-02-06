import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Login from "./screens/Login";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import Explore from "./screens/Explore";
import ViewAll from "./screens/ViewAll screen";
import Foooter from "./components/Foooter";
import ServiceDetail from "./screens/ServiceDetail";
import Forms from "./components/Forms";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchProzHubApi} from "./features/Slicers/Slicer"
function App() {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state.Slicer)
  console.log(state)

  // return(
  //   <Forms/>
  // )
  useEffect(()=>{
    dispatch(fetchProzHubApi())
  },[])
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="Service" element={<ServiceDetail />} />
          <Route path="/ViewAll/:title/:bg" element={<ViewAll />} />
        </Routes>
        <Foooter />
      </Router>
    </div>
  );
}

export default App;
