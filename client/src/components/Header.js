import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalContext';

const Header = () => {
  const { pathname } = useLocation();
  const { user, logout } = useGlobalContext();
  return (
    <div className='main-header'>
      <div className='main-header__inner'>
        <div className='main-header__left'>
          <Link to='/'>Home</Link>
        </div>
        <div className=' main-header__middle animated bounceInDown'>
          {user ? <Link to='/dashboard'>Dashboard</Link> : <h1>Dashboard</h1>}
        </div>

        <div className='main-header__right'>
          {user ? (
            <button className='btn' onClick={logout}>
              Logout
            </button>
          ) : pathname === '/login' ? (
            <Link to='/register' className='btn'>
              Register
            </Link>
          ) : (
            <Link to='/login' className='btn'>
              Login
            </Link>
          )}
        </div>
      </div>
      <hr className='line-header' />
    </div>
  );
};

export default Header;
