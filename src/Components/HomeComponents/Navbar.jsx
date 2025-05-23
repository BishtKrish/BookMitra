import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Login from '../HomeComponents/Login.jsx'
import Logout from '../HomeComponents/Logout.jsx'
import { useAuth } from '../../ContextApi/AuthProvider.jsx'
import { CounterContext } from '../../ContextApi/CounterContextApi.jsx'

const Navbar = () => {
  const value = useContext(CounterContext)
  const [authUser, setAuthUser] = useAuth()
  const navigate = useNavigate()
  const [theme, settheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark")
      document.body.classList.add("dark")
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light")
      document.body.classList.remove("dark")
    }
  }, [theme])

  // Check for user in local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, [setAuthUser]);

  // Modified handler to redirect to signup page instead of showing modal
  const handleLoginClick = () => {
    navigate('/signup'); // Navigate to signup page
  }

  // Handler for logout
  const handleLogout = () => {
    localStorage.removeItem("Users"); // Clear user from local storage
    setAuthUser(null); // Clear the auth user state
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto shadow-md md:px-20 fixed top-0 left-0 bg-sky-300 z-10 dark:bg-indigo-950 dark:text-white">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm bg-white dark:bg-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/categories">Categories</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li className="mx-1">
                <NavLink className="navLine" to="/admin/dashboard">Sell Your Book</NavLink>
              </li>

              <li>

              <div>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller hidden bg-transparent border-none" value="synthwave" />
                {/* sun icon */}
                <svg onClick={() => settheme(theme === "light" ? "dark" : "light")} className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />Light Mode</svg>
                {/* moon icon */}
                <svg onClick={() => settheme(theme === "dark" ? "light" : "dark")} className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />Dark Mode</svg>

              </label>
            </div>

              </li>

              </ul>
            </div>
            <Link to="/" className="bg-transparent text-blue-700 drop-shadow-lg font-bold cursor-pointer border-none text-3xl font-[Agbalumo]">BookMitra</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu font-medium menu-horizontal px-1">
              <li className="mx-1">
                <NavLink className="navLine" to="/">Home</NavLink>
              </li>
              <li className="mx-1">
                <NavLink className="navLine" to="/categories">Categories</NavLink>
              </li>
              <li className="mx-1">
                <NavLink className="navLine" to="/about">About</NavLink>
              </li>
              <li className="mx-1">
                <NavLink className="navLine" to="/contact">Contact us</NavLink>
              </li>
              <li className="mx-1">
                <NavLink className="navLine" to="/admin/dashboard">Sell Your Book</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className='hidden lg:flex'>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller hidden bg-transparent border-none" value="synthwave" />
                {/* sun icon */}
                <svg onClick={() => settheme(theme === "light" ? "dark" : "light")} className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                {/* moon icon */}
                <svg onClick={() => settheme(theme === "dark" ? "light" : "dark")} className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

              </label>
            </div>
            <div className="flex-none mx-1 md:mx-3">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">{value.count}</span>
                  </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[5] card card-compact dropdown-content w-52 bg-base-100 shadow dark:bg-slate-900 dark:text-white">
                  <div className="card-body">
                    <span className="font-bold text-lg">{value.count} Items</span>
                    <div className="card-actions">
                      <Link to="/cart" className="btn btn-primary btn-block">View cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Show login or logout button based on auth state */}
            <div>
              {authUser ? (
                <button 
                  onClick={handleLogout} 
                  className="px-5 py-3 rounded-xl cursor-pointer bg-slate-900 border-none text-white hover:bg-white hover:text-black duration-300 dark:bg-slate-950 dark:hover:bg-white">
                  Logout
                </button>
              ) : (
                <button 
                  onClick={handleLoginClick} 
                  className="px-5 py-3 rounded-xl cursor-pointer bg-slate-900 border-none text-white hover:bg-white hover:text-black duration-300 dark:bg-slate-950 dark:hover:bg-white">
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* We no longer need the login modal since we're redirecting to the signup page */}
    </>
  )
}

export default Navbar