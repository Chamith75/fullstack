import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    let navigate = useNavigate();

    const HandleSubmit = () =>{

    }

    let handleSignIn = ( ) => {
        navigate('/login')
    }
  return (
    <div>
      <div className='login-background'>
      

      <div className='justify-content-center d-flex mt-2'>
        <div className="col-3 m-auto form-signin">
          <form className='card-login  justify-content-center d-flex bg-body-tertiary mt-5 login-card'  >
            <form >
              <div className='justify-content-center d-flex '>
                <h1 className="h3 mb-3 fw-normal login-heading-style font-weight-bolder m-3 ">Sign up</h1>
              </div>
  
  
              <div className="form-floating">
                <input className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Name</label>
              </div>

              <div className="form-floating">
                <input className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Email</label>
              </div>
  
  
  
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              
  
  
              <button className="btn btn-primary w-100 py-2" type="submit" onClick={HandleSubmit}>Sign up</button>

              <div className='d-flex justify-content-center p-3 mb-3'>
               <p>Dont Have Account ?  <button className='btn' onClick={handleSignIn}>Signin</button> </p>
            </div>
  
            </form>
  
  
          </form>
        </div>
  
      </div>
  
  
  
    </div>
    </div>
  )
}

export default Register
