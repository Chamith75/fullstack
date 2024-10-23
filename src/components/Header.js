import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    let navigate =useNavigate();
    const handleSignin = (e) =>{
        e.preventDefault();
        navigate('/login')

    }
  return (
    <div>
         {/* nav bar */}
       <section>
       <div className="container">
      <header className="border-bottom lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <NavLink className="link-secondary" href="#">Subscribe</NavLink>
          </div>
          <div className="col-4 text-center">
            <NavLink className="blog-header-logo text-body-emphasis text-decoration-none" href="#">
              Ck- News 100% True 
            </NavLink>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <NavLink className="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <path d="M21 21l-5.2-5.2"></path>
              </svg>
            </NavLink>
            <NavLink className="btn btn-sm btn-outline-secondary" href="#" onClick={handleSignin}>Sign up </NavLink>
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-3 border-bottom">
        <nav className="nav nav-underline justify-content-between">
          <NavLink className="nav-item nav-link link-body-emphasis active" to="/">Home</NavLink>          
          <NavLink className="nav-item nav-link link-body-emphasis" to="/sports">Sports</NavLink>
          <NavLink className="nav-item nav-link link-body-emphasis" to="/weather">Weather</NavLink>
          <NavLink className="nav-item nav-link link-body-emphasis" to="/contact">Contact us</NavLink>
          <NavLink className="nav-item nav-link link-body-emphasis" to="/about">About us</NavLink>
        </nav>
      </div>
    </div>
       </section>
    </div>
  )
}

export default Header
