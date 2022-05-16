import React from "react"
import pointer from "../images/location.png"

export default function Card(props) {
    return(
        <div className="card">
            <img className="card--img" src={props.item.imageUrl} alt="card-foto" />
            <div className="card--stats">
                <div className="card--location">
                    <img src={pointer} className="card--location--icon" alt="pointer"/>
                    <h5>{props.item.location}</h5>
                    <a href={props.item.googleMapsUrl}>View on google maps</a>
                </div>
                <p className="card--title">{props.item.title}</p>
                <div className="card--date">
                    <h4>{props.item.startDate}  -</h4>
                    <h4>{props.item.endDate}</h4>
                </div>
                <p className="card--info">{props.item.description}</p>
                
            </div>
            
        </div>
    )
}