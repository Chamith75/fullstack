import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import Post from './Post';

const Admin = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); // Redirect to login if no token is found
        return;
      }

      try {
        const response = await axios.get('http://localhost:3039/api/userInfo', {
          headers: {
            'x-access-token': token
          }
        });
        setUserData(response.data);
        console.log(token)
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.status === 401) {
          navigate('/login'); // Redirect to login if token is invalid
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!userData) {
    return <div>Loading...</div>; // Optional: Show a loading state while fetching data
  }
  const HandleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/login')

  }

  return (
    <div>
     
      <section>
      
        <header>
          <div className="px-3 py-2 text-bg-dark border-bottom">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                  <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                    <use xlinkHref="#bootstrap"></use>
                  </svg>
                </a>

                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li>
                    <NavLink href="#" className="nav-link text-secondary">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                        <use xlinkHref="#home"></use>
                      </svg>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="#" className="nav-link text-white" to='/post'>
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                        <use xlinkHref="#people-circle"></use>
                      </svg>
                      Post
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink href="#" className="nav-link text-white">
                      <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                        <use xlinkHref="#people-circle"></use>
                      </svg>
                      Profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-3 py-2 border-bottom mb-3">
            <div className="container d-flex flex-wrap justify-content-center">
              <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
              </form>

              <div className="text-end">
                <button type="button" className="btn btn-light text-dark me-2" onClick={HandleLogout}>Logout</button>

              </div>
            </div>
          </div>
        </header>
       
      </section>
      {/* hero section */}
      <section>
      <div className="px-4 py-5 my-5 text-center">
      {/* <img
        className="d-block mx-auto mb-4"
        src="/docs/5.3/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      /> */}
      <h1 className="display-5 fw-bold text-body-emphasis">Welcome, {userData.username}!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
        Empowering you with information that shapes your world, one update at a time.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            Add news !
          </button>
        </div>
      </div>
    </div>

      </section>
      <section className='m-4 col-8 justify-content-center p-4' >
        <Post/>

      </section>

      {/* <section>
        
        <p>ID: {userData._id}</p>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
      </section> */}

    </div>
  );
};

export default Admin;
