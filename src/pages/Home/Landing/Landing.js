import React from 'react'
import "./Landing.scss"
import Landing1 from "../../../utils/land1.png"
import Landing2 from "../../../utils/land2.png"
import Landing3 from "../../../utils/land3.png"
import {withRouter} from "react-router-dom"
import Gallery from "../Segment/Gallery"

const Landing = ({history}) => {
    return (
        <div className="Landing">
            <div className="galleryc">
            <Gallery img1={Landing1} img2={Landing2} img3={Landing3}/></div>
            <span>Dubrovnik,Croatia</span>
            <h1 className="Landing__title">Hotel Blue Lagoon</h1>
            <p>Seaside luxury redefined</p>
            <h2 onClick={()=>history.push("/rooms")}>SEE OUR ROOMS</h2>
        </div>
    )
}

export default withRouter(Landing)
