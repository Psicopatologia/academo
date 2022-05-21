import React from "react";
import { StarRating } from "./StarRating";
import '../styles/UserRating.scss'

function UserRating({ picture, name, review }) {
    return (
        <div className="userRating">
            <div className="userRating__imgContainer">
                <img
                    className="userRating__imgContainer__img"
                    src={picture}
                />
            </div>
            <p>
                {name}
            </p>
            <div className="userRating__star">
                <StarRating rating={review} />
            </div>
        </div>
    )
}

export { UserRating };