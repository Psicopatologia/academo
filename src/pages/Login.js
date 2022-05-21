import React from "react";
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { LoadAnimation } from "../components/LoadAnimation";
import '../styles/Login.scss'

function Login({move}) {
    const form = React.useRef(null);
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!loading) {
            setLoading(true)
            const formData = new FormData(form.current);
            const data = {
                username: formData.get("username"),
                password: formData.get("password")
            }
            setTimeout(() => {
                setLoading(false)
                move(2)
                }
                , 1000
            )
        }
    }

    return (
        <React.Fragment>
            <Header />
            <main className="loginPage">
                <div className="loginContainer">
                    <h1 className="loginContainer__title">AcaDemo</h1>
                    <form action="/" className="loginContainer__form" ref={form} autoComplete="off">
                        <label htmlFor="username" className="loginContainer__form__label">
                            Nombre de usuario
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="loginContainer__form__input"
                        />
                        <label htmlFor="password" className="loginContainer__form__label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="loginContainer__form__input"
                        />
                        <Button
                            className={`btn btn--blue
                                loginContainer__form__submit
                                ${(loading) ? 'loginContainer__form__submit--loading' : ''}`}
                            click={handleSubmit}
                        >
                            {
                                (loading) ?
                                    <LoadAnimation w="1.2em" h="1.2em" /> :
                                    'Ingresar'
                            }
                        </Button>
                        <a className="loginContainer__form__link" href="#">
                            Recuperar contraseña
                        </a>
                    </form>
                </div>
            </main>
        </React.Fragment>
    )
}

export { Login }