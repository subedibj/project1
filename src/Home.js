import React from 'react';
import img1 from "../src/images/img2.jpg";
import img2 from "../src/images/img1.jpg";
import img3 from "../src/images/img0.jpg";

function Home() {

  return (
      <>
<section id="home" className="home">

 <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators change-time">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} alt="Los Angeles" width="100%" height="500"/>
      </div>

    <div class="carousel-item">
      <img src={img2} alt="Chicago" width="100%" height="500"/>  
    </div>

    <div class="carousel-item">
  <img src={img3} alt="Chicago" width="100%" height="500"/>
</div>


    <div class="carousel-caption text-center">
    <div className="col-lg-12 col-md-12 col-12"></div>
          <section className="text-capitalize">
            <h2> Currently we provide following services</h2>
          <h1 className="change_content mr-5 pt-2 bounce"></h1>
            <p className="text-center pt-3">
              To Develop Websites And Enterprises Software We Are Here For You.</p>
            <a className="btn btn-outline-primary mb-5 text-white" href="#product">OUR PRODUCTS</a>
            </section>
      </div>


  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
</a>
</div>
</section>
      </>

  );
};

export default Home;
