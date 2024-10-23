import React, { useState } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to include Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {

    let navigate = useNavigate();
    let [Userdata , setUserdata] = useState( {
      username: '',
      password: '',
    })

    const HandleSubmit = async (e) => {
      e.preventDefault();
      try{
        const response = await axios.post('http://localhost:3039/api/login', { Userdata});
        if (response.status === 200) {
          // Store the token in localStorage
          localStorage.setItem('token', response.data.token);

          

          const userResponse = await axios.get('http://localhost:3039/api/userInfo' , {
            headers : {'x-access-token'  : response.data.token}
          });
          if (userResponse.status === 200) {
            navigate('/admin');
            setUserdata({
              username: '',
              password: '',
            })
            
          }
      }
      
        
      }catch(e){
        if(e.response && e.response.status === 500){
          navigate('/login')
          
        }
      }
    }
    const Handlechange = (e) => {
      let { name , value} = e.target;
      setUserdata({...Userdata , [name] : value}) 
      
    }

    const handleSignup = () => {
        navigate('/register')

    }
  return (
    <div className='login-background  '>
      

    <div className='justify-content-center d-flex '>
      <div className="col-3 m-auto form-signin">
        <form className='card-login  justify-content-center d-flex bg-body-tertiary mt-5 login-card'  >
          <form >
            <div className='justify-content-center d-flex'>
              <h1 className="h3 mb-3 fw-normal login-heading-style font-weight-bolder ">Sign in</h1>
            </div>


            <div className="form-floating">
              <input className="form-control"  name="username" value={Userdata.username} onChange={Handlechange}/>
              <label htmlFor="floatingPassword">RollNo</label>
            </div>



            <div className="form-floating">
              <input type="password" className="form-control" name="password" value={Userdata.password} onChange={Handlechange} />
              <label htmlFor="floatingPassword">Password</label>
            </div>



            <button className="btn btn-primary w-100 py-2" type="submit" onClick={HandleSubmit}>Sign in</button>
            <div className='d-flex justify-content-center p-3'>
               <p>Dont Have Account ?  <button className='btn' onClick={handleSignup}>Signup</button> </p>
            </div>

          </form>


        </form>
      </div>

    </div>



  </div>
  )
}

export default Login
