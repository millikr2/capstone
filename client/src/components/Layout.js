import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AuthBox from "./Authentication";
import Header from "./Header"
import {useGlobalContext} from "../context/GlobalContext"
import Dashboard from "./Dashboard"
import Home from "./Home"

const Layout = () => {
    const {fetchingUser} = useGlobalContext()
    return fetchingUser ? (
      <div className='loading'>
        <h1>Loading</h1>
      </div>
    ) : (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/login' element={<AuthBox />} />
          <Route path="/register" element={<AuthBox register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Layout