import React from 'react';
import Navbars from './Navbars';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './index.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Heading from './Heading';
import Headingdta from './Headingdta';
import Sdata from './Sdata';
import Servicescard from './Servicescard';
import Teamdta from './Teamdta';
import Teamcard from './Teamcard';
import Productdta from './Productdta';
import Productcard from './Productcard';
function scard(val){
    return(
  
      <Servicescard  title={val.title} desc={val.desc}  id={val.id} icon1={val.icon1}/>
  
    );
  }
  function tcard(val){
    return(
  
      <Teamcard imgsrc={val.imgsrc} prof={val.prof} desc={val.desc} id={val.id} icon1={val.icon1} icon2={val.icon2} icon3={val.icon3}/>
  
    );
  }
  function pcard(val){
    return(
  
      <Productcard productimg={val.productimg} info={val.info}/>
  
    );
  }

  
function App() {
    return (
<>
<Navbars/>
<Home/>
<About/> 

  <Heading heading={Headingdta[0].heading}/>
  <div className="container-fluid row" id="service">{Sdata.map(scard)}</div>
  
  <Heading heading={Headingdta[1].heading}/>
  <div className="container-fluid row" id="product">{Productdta.map(pcard)}</div>

 <Heading heading={Headingdta[2].heading}/>
<div className="container-fluid row" id="team">{Teamdta.map(tcard)}</div>

 <Contact/>

</>
    );
};

export default App;