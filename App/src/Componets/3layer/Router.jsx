import React from 'react'
import { YourComponent } from '../YourComponent';
import { Routes, Route, Navigate } from "react-router-dom";
import Cointable from '../Tredingcoin/Cointable';
import Chart from "../Tredingcoin/Banner/chart"

const Router = ({state}) => {
  return (
    <Routes>
        <Route  path='/' element={<Navigate to="/Home"/>}></Route>
        <Route path="/Home" element={<YourComponent state={state} />} ></Route>
        <Route path="/crypto" element={<Cointable />}></Route>
        <Route path="/Chart/:id" element={<Chart />} ></Route>
        {/* <Route path="" element={<App1/>}></Route> */}
        
    </Routes>
  )
}

export default Router