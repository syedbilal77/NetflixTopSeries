import react from "react";
import reactDom from "react-dom";
import Card from "./Card"
import Sdata from "./Sdata"
import "./index.css";
reactDom.render(
<>
<h1 className="heading_style">List of top Netflix Series in 2021</h1>
  
 {Sdata.map((val) => {
   return(
  <Card
    imgsrc={val.imgscr} 
   title={val.title} 
  Sname= {val.sname} 
  link={val.links}
  /> )
   })};
 <h2 className="heading_style1"> Designed by Syed Bilal © 2021</h2>
  </>,

document.getElementById('root'));