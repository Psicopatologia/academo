import React from "react";
import { Header } from "../components/Header";
import '../styles/ClassPage.scss'

function ClassPage() {
    const [users, setUsers] = [[]];
    const API_URL = 'https://randomuser.me/api/?results=20';
    const getUsers = async () => {
        const response = await fetch(API_URL);
        console.log(response.results)
        //const jsonData = await JSON.parse(response.results);
        //setUsers(jsonData)
    }
    React.useEffect(()=>{getUsers()}, []) 
    return (
        <React.Fragment>
            <Header>

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
                                (user) => (
                        <div className="ratingContainer__item">
                            <div className="ratingContainer__item__imgContainer">
                                <img className="ratingContainer__item__imgContainer__img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464" />
                            </div>
                            <p>
                                {user.name.first}
                            </p>
                            <div>
                                [*******]
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