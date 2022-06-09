import React from "react"
import pointer from "../images/location.png"

export default function Card() {
    return(
        <div className="card">
            <img className="card--img" src="https://source.unsplash.com/WLxQvbMyfas" alt="card-foto" />
            <div className="card--stats">
                <div className="card--location">
                    <img src={pointer} className="card--location--icon" alt="pointer"/>
                    <h5>Japan</h5>
                    <a href="https://source.unsplash.com/WLxQvbMyfas">View on google maps</a>
                </div>
                <p className="card--title">Mount Fuji</p>
                <div className="card--date">
                    <h4>12 Jan, 2021  -</h4>
                    <h4>24 Jan, 2021</h4>
                </div>
                <p className="card--info">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                
            </div>
            
        </div>
    )
}