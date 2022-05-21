import React from "react";
import { Header } from "../components/Header";
import { StarRating } from "../components/StarRating";
import { DropdownUser } from "../containers/DropdownUser";
import { ReactComponent as Arrow } from "../assets/down.svg";
import '../styles/ClassPage.scss'

function ClassPage({ move }) {
    const [users, setUsers] = React.useState([]);
    const [userMenu, setUserMenu] = React.useState(false)
    const API_URL = 'https://randomuser.me/api/?results=20';
    const getUsers = async () => {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setUsers(jsonData.results)
    }
    React.useEffect(() => getUsers, [])
    return (
        <React.Fragment>
            <Header>
                <div onClick={() => setUserMenu(!userMenu)} className="navbar__user">
                    <img src={users.length > 0 ? users[0].picture.large : ""} className="navbar__user__img" />
                    <span className="navbar__user__name">
                        {users.length > 0 ? `${users[0].name.first} ${users[0].name.last}` : ''}
                    </span>
                    <Arrow />
                    <DropdownUser active={userMenu}>
                        <a className="dropdownUser__link" href="/">Salir</a>
                    </DropdownUser>
                </div>
            </Header>
            <main className="classPage">
                <div className="videoContainer">
                    <iframe

                        width="560px"
                        height="315px"
                        className="videoContainer__video"
                        src="https://www.youtube.com/embed/muhg8aCLQzU"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="classPage__info">
                    <h1 className="classPage__info__title">
                        Capricho Árabe
                    </h1>
                    <p className="classPage__info__author">
                        Francisco Tárrega
                    </p>
                </div>
                <section className="ratingSection">
                    <h2 className="ratingSection__title">
                        Valoraciones de la clase
                    </h2>
                    <div className="ratingContainer">
                        {
                            users.map(
                                (user, index) => (
                                    <div className="ratingContainer__item">
                                        <div className="ratingContainer__item__imgContainer">
                                            <img className="ratingContainer__item__imgContainer__img" src={user.picture.large} />
                                        </div>
                                        <p>
                                            {`${user.name.first} ${user.name.last}`}
                                        </p>
                                        <div className="ratingContainer__item__star">
                                            <StarRating rating={Math.floor(Math.random() * 5 + 1)} />
                                        </div>
                                    </div>

                                )
                            )
                        }

                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export { ClassPage }