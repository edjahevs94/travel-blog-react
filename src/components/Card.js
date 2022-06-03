import React from "react"
import pointer from "../images/location.png"

export default function Card(props) {
    return(
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-1">
                    <img className="card--img" src={props.item.imageUrl} alt="card-foto" />
                </div>
                <div className="col-6 card--stats">
                    <div className="card--location d-flex align-content-center">
                        <img src={pointer} className="card--location--icon" alt="pointer"/>
                        <h5 className="ms-1">{props.item.location}</h5>
                        <a href={props.item.googleMapsUrl} className="ms-2">View on google maps</a>
                    </div>
                    <h4 className="mt-2 card--title">{props.item.title}</h4>
                    <div className="mt-3 card--date d-flex align-content-center">
                        <h4>{props.item.startDate}  - </h4>
                        <h4>{props.item.endDate}</h4>
                    </div>
                        <p className="mt-2 card--info">{props.item.description}</p>
                    
                </div>
            </div>
        </div>
    )
}