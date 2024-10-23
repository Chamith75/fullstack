import React, { useEffect, useState } from 'react'

const Sports = () => {
  let url = `https://newsapi.org/v2/top-headlines/sources?category=sports&apiKey=5fc90fecacca427cadb790f07f70193c`

  const [Sports , setSports] = useState([]);
  let getsportsdata = async () => {
    try{
      let response =await fetch(url);
      let data = await response.json();
      setSports(data.sources);
      console.log(Sports)

    }catch(e){
      console.error(e)
    }
  }

  useEffect(() => {
    getsportsdata();
  } , [])
  return (
    <div>
        <hr className="featurette-divider" />

{Sports.map((article, index) => {
  return (
    <div key={index}>
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            {article.name} <span className="text-body-secondary"></span>
          </h2>
          <p className="lead">
            {article.description}
            
          </p>
          
        </div>
        {/* <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect>
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div> */}
      </div>
      <button className='btn btn-outline-secondary'  onClick={() => window.location.href = article.url}>
        Go to Bleacher Report
    </button>
      <hr className="featurette-divider" />
    </div>
  )
})}
      
    </div>
  )
}

export default Sports
