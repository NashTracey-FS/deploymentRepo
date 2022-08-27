import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = () => {
 
  let auth = {'token': true}

  return (
    auth.token ? <Outlet/> : <Navigate to ='/login' />
  )
  
};
export default PrivateRoute