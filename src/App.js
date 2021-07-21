import React, { createContext } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";
import CheckOut from "./components/CheckOut/CheckOut";



export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <PrivateRoute path="/admin">
           <Admin></Admin>
         </PrivateRoute>
         <PrivateRoute path="/order">
           <Order></Order>
         </PrivateRoute> 
         <PrivateRoute path="/manageProduct">
           <ManageProduct></ManageProduct>
         </PrivateRoute>
         <PrivateRoute path="/checkOut/:id">
           <CheckOut></CheckOut>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/signUp">
           <SignUp></SignUp>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
