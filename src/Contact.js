import React from 'react';

function Contact() {
  return (
<>
<section>

<div className="container mt-5" id="contact">
<h1 className="text-center text-capitalize pt-5">Contact Us</h1>
<hr className="w-25 mx-auto pb-5"/>

<div className="w-50 mx-auto mb-5">
    <form>
        <div className="form-group">
      <label>Email address:</label>
         <input type="email" className="form-control" placeholder="Enter email" id="email" autoComplete="off" required/>
   </div>
     
   <div className="form-group">
      <label>Password:</label>
       <input type="password" className="form-control" placeholder="Enter password" id="pwd" required/>
   </div>
   <div className="form-group">
     <label>Phone No:</label>
     <input type="number" className="form-control" placeholder="Enter phone number" id="no" required/>
   </div>

 
   <div className="form-group">
     <label>Message</label>
     <textarea className="form-control"></textarea>
   </div>

   <div className="form-group form-check">
     <label className="form-check-label">
         <input className="form-check-input" type="checkbox"/> Remember me
     </label>
   </div>
     <button type="submit" className="btn btn-success">Submit</button>
    </form>
                        
</div>
</div>
</section>

</>
  );
};

export default Contact;