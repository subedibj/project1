import React from 'react';


function Heading(props) {
return (
<>
<h1 className="text-center text-capitalize pt-5 mt-5">{props.heading}</h1>
  <hr className="w-25 mx-auto pb-5"/>
  </>
  );
  };

export default Heading;