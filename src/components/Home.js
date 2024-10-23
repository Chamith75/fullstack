import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  var url = ' https://newsapi.org/v2/top-headlines?country=in&apiKey=5fc90fecacca427cadb790f07f70193c';
  const [News, setNews] = useState([]);
  const handledetails = () => {

  }

  let fetchdata = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setNews(data.articles);
      console.log(data.articles);  // Logs the fetched articles
    } catch (e) {
      console.log(e);  // Logs any errors
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (

    <div>
      <Header />

      {/* Carsouel */}

      <section>
        <main>
          <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-label="Slide 1"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className=""
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className=""
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item carousel-item-next carousel-item-start">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <div className="container">
                  <div className="carousel-caption text-start">
                    <h1>Example headline.</h1>
                    <p className="opacity-75">
                      Some representative placeholder content for the first slide of the carousel.
                    </p>
                    <p>
                      <NavLink className="btn btn-lg btn-primary" href="#">
                        Sign up today
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>
                      Some representative placeholder content for the second slide of the carousel.
                    </p>
                    <p>
                      <NavLink className="btn btn-lg btn-primary" href="#">
                        Learn more
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item active carousel-item-start">
                <svg
                  className="bd-placeholder-img"
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>
                      Some representative placeholder content for the third slide of this carousel.
                    </p>
                    <p>
                      <NavLink className="btn btn-lg btn-primary" href="#">
                        Browse gallery
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="container marketing">
            <div className="row">
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Heading</h2>
                <p>
                  Some representative placeholder content for the three columns of text below the
                  carousel. This is the first column.
                </p>
                <p>
                  <NavLink className="btn btn-secondary" href="#">
                    View details »
                  </NavLink>
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Heading</h2>
                <p>
                  Another exciting bit of representative placeholder content. This time, we've moved
                  on to the second column.
                </p>
                <p>
                  <NavLink className="btn btn-secondary" href="#">
                    View details »
                  </NavLink>
                </p>
              </div>
              <div className="col-lg-4">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Heading</h2>
                <p>
                  And lastly this, the third column of representative placeholder content.
                </p>
                <p>
                  <NavLink className="btn btn-secondary" href="#">
                    View details »
                  </NavLink>
                </p>
              </div>
            </div>

            <hr className="featurette-divider" />

            {News.map((article, index) => {
              return (
                <div key={index}>
                  <div className="row featurette">
                    <div className="col-md-7">
                      <h2 className="featurette-heading fw-normal lh-1">
                        First featurette heading. <span className="text-body-secondary">{article.publishedAt}</span>
                      </h2>
                      <p className="lead">
                        {article.title}
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
                  <button className='btn btn-outline-secondary' onClick={() => window.location.href = article.url}>
                    Go to Bleacher Report
                  </button>
                  <hr className="featurette-divider" />
                </div>
              )
            })}
          </div>
        </main>


      </section>

    </div>
  )
}

export default Home
