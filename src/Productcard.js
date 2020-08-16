import React from 'react';

function Produtcard(props) {
  return (
<>        
		<div className="col-lg-4 col-md-4 col-12 pb-5">
		         <div className="card">
                   <div className="card-div"><h2>{props.info}</h2></div>
					  <img src={props.productimg} alt="not support" width="100%" height="400"/>
				</div>
		</div>
					
					
    </>

  );
  };
export default Produtcard;