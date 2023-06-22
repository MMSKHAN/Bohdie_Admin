import React from 'react'
import Nav from './Component/Navigation/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Users from './Component/Users/Users';
import Logout from './Component/Logout/Logout';
import Bdage from './Component/Bdage/Bdage';
import Challanges from './Component/Challanges/Challanges';
import Dashbord from './Component/Dashboart/Dashbord';
import TopNav from './Component/Navigation/TopNav';
import Add from './Component/Addnew/Add';
function App() {
  return (
    <BrowserRouter>
    < Nav />
    <TopNav/>
    <Routes>
     <Route exect path="/"element={< Dashbord />}/>
     <Route exect path="/Users"element={< Users />}/>
     <Route exect path="/Challanges"element={< Challanges />}/>
     <Route exect path="/Bdage"element={< Bdage />}/>
     <Route exect path="/Logout"element={< Logout />}/>
     <Route exect path="/Add"element={< Add />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App