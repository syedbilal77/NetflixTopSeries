import react from "react";

function Card(props){
    return (
  
      <div className="cards">
    <div className="card">
  
      <img src={props.imgsrc} alt="myPic" className="card__img"/>
  
      <div className="card__info">
        <span className="class__category">{props.target}</span>
        <h3 className="card__title">{props.Sname}</h3>
        <a href={props.link} target="_blank">
          <button className="button">Watch Now</button>
        </a>
      </div>
    </div>
  
    </div>
  
  
  
    ) }
 
    export default Card;