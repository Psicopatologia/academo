import React from "react";
import '../styles/LoadAnimation.scss'
function LoadAnimation({w, h}) {
    console.log(w)
    const animationSize = {
        width:w,
        height:h
    }
    return(
        <div className="loadAnimation" style={animationSize}>
            <div className="loadAnimationItem"></div>
            <div className="loadAnimationItem"></div>
            <div className="loadAnimationItem"></div>
            <div className="loadAnimationItem"></div>
        </div>
    )
}

export { LoadAnimation }