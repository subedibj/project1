import React from 'react';


function Teamcard(props) {
  return (
<>        
		<div className="col-lg-3 col-md-6 col-12 pt-3">
		         <div className="card" id={props.id}>
					  <img className="card-img-top" src={props.imgsrc}  alt="Card image cap" width="250" height="350"/>
					   <div className="card-body text-capitalize text-center">
                        <h5 className="card-title text">{props.prof}</h5>
                         <p className="card-text text-center">{props.desc}</p>
                       <i className={props.icon1}></i><i className={props.icon2}></i><i className={props.icon3}></i>
					  </div>
				</div>
		</div>
					
					
    </>

  );
  };

export default Teamcard;