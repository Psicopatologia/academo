import React from "react";
import { Header } from "../components/Header";
import { DropdownUser } from "../containers/DropdownUser";
import { ReactComponent as Arrow } from "../assets/down.svg";
import '../styles/ClassPage.scss'
import { RatingContainer } from "../containers/RatingContainer";

function ClassPage() {
    const [userMenu, setUserMenu] = React.useState(false)
    return (
        <React.Fragment>
            <Header>
                <div onClick={() => setUserMenu(!userMenu)} className="navbar__user">
                    <img src="https://avatars.githubusercontent.com/u/44331089?v=4" className="navbar__user__img" />
                    <span className="navbar__user__name">
                        Sebastián Orozco
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
                    <RatingContainer classID={20} />
                </section>
            </main>
        </React.Fragment>
    )
}

export { ClassPage }