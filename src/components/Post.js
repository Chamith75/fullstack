import React, { useState } from 'react';
import axios from 'axios';


const Post = () => {
  const [news, setnews] = useState({
    username:'',
    headline: '',
    descrption: '',
  })
  const handlechange = (e) => {
    setnews({...news, [e.target.name]: e.target.value});
    console.log(news)    

  }
  const handleclick = async(e) => {
    e.preventDefault(); // Prevent default form submission
    try {
        await axios.post('http://localhost:3039/api/newspost', news);
        console.log('News added successfully');
    } catch (e) {
        console.log(e);
        console.log('ERROR: while adding news in frontend');
    }
}
  return (
    <div>
      <section className='col-8 row d-flex justify-content-center'>
      <div className="col-md-7 col-lg-8">
  <h4 className="mb-3">Add news</h4>
  <form className="needs-validation" noValidate>
    <div className="row g-3">
      

      

      <div className="col-12">
        <label htmlFor="username" className="form-label">Username</label>
        <div className="input-group has-validation">
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" id="username" placeholder="Username"  name='username'  onChange={handlechange} required />
          <div className="invalid-feedback">
            Your username is required.
          </div>
        </div>
      </div>

      

      <div className="col-12">
        <label htmlFor="address" className="form-label">Headline</label>
        <input type="text" className="form-control" id="address" required name='headline'  onChange={handlechange} />
        <div className="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>

      <div className="col-12">
        <label htmlFor="address2" className="form-label">
         Descrption<span className="text-body-secondary"></span>
        </label>
        <input type="text" className="form-control" id="address2"  name='descrption'  onChange={handlechange} />
      </div>

     

     

      
    </div>

    <hr className="my-4" />

    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="same-address"  />
      <label className="form-check-label" htmlFor="same-address">
        Agree to terms and conditions
      </label>
    </div>

    

   

   

    
      

    

    <hr className="my-4" />

    <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleclick}  >Add</button>
  </form>
</div>
      </section>
      
    </div>
  )
}

export default Post
