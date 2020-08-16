import React from 'react';
import web1 from "../src/images/img5.jpg";

function About(){
    return(
<>
<div className="container mt-5" id="about">
<h1 className="text-center text-capitalize pt-5 mt-5">about us</h1>
  <hr className="w-25 mx-auto pb-5"/>

<div className="row">
<div className="col-lg-6 col-md-6 col-12">
<h2 className="text-center text-capitalize pb-3">Know About Company</h2>
<p className="text-center">
    Qubit Technology is a leading IT solution provider in Nepal with expertise on Web design/development, Customize Software development, PWA (Progressive Web Applications) Design and development, Enterprise Resource Planning (ERP) and Module Development, Web-based support and solution development, SEO and SEM. Over the time Qubit have left an indelible impression in the IT solution with an impressive clientele and extensive national presence.
We have been satisfying our clients’ needs since our establishment since we are comprised of experienced and professional team members from different backgrounds and we take customer service very seriously. Rest assured we provide topnotch IT services in the market adapting the most prominent technologies. Also, we are very concerned about our clients so we assist them with our professional help and services as long as we are working on your project</p>
        </div>

            <div className="col-lg-6 col-md-6 col-12">
                <img className="img-fluid" src={web1} alt="not support"/>
            </div>


            </div>
        </div>
</>
    );
};

export default About;