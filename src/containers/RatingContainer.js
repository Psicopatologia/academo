import React from "react";
import { LoadAnimation } from "../components/LoadAnimation";
import { StarRating } from "../components/StarRating";
import { UserRating } from "../components/UserRating";
import '../styles/RatingContainer.scss'

function RatingContainer({ classID }) {
    const [loading, setLoading] = React.useState(true)
    const [users, setUsers] = React.useState([]);
    const API_URL = `https://randomuser.me/api/?results=${classID}`;
    const getUsers = async () => {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        for (let i = 0; i < jsonData.results.length; i++) {
            jsonData.results[i].review = Math.floor(Math.random() * 5 + 1);
        }
        setLoading(false)
        setUsers(jsonData.results)
    }
    React.useEffect(() => getUsers, [])
    return (
        <React.Fragment>
            <h2 className="ratingTitle">
                Valoraciones de la clase
            </h2>
            <div className="ratingContainer">
                {loading &&
                    <div className="ratingLoad">
                        <LoadAnimation w="5em" h="5em" color="blue" />
                    </div>
                }
                {
                    users.map(
                        (user) => (
                            <UserRating
                                name={`${user.name.first} ${user.name.last}`}
                                picture={user.picture.large}
                                rating={user.review}
                            />
                        )
                    )
                }
            </div>
        </React.Fragment>
    )
}

export { RatingContainer };