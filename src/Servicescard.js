import React from 'react';



function Servicescard(props) {
  return (
<>        
		<div className="col-lg-3 col-md-6 col-12 text-center pb-5">
      <div className="card">
             <h3 className="card-title">{props.title}</h3>
             <i className={props.icon1} id="icons" aria-hidden="true"></i>
              <h5 className="card-text">{props.desc}</h5>
					   <div className="card-body text-capitalize text-center">
             <a href="#" className="btn btn-outline-primary btn-light">Read More</a>
					  </div>
            </div>
				</div>
</>

  );
  };

export default Servicescard;