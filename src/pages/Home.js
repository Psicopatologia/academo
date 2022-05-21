import React from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { ReactComponent as GuitarIllustration } from '../assets/playGuitar.svg'
import '../styles/Home.scss'

function Home(props) {
    return (
        <React.Fragment>
            <Header>
                <a className='navbar__menu__link' href='/login'>
                    Ingresar
                </a>
                <a className='navbar__menu__link' href='/login'>
                    Registrarse
                </a>
            </Header>
            <main className='homePage'>
                <div className='homePage__leftContainer'>
                    <h1 className="homePage__leftContainer__title">AcaDemo</h1>
                    <p className="homePage__leftContainer__text">La mayor comunidad educativa en español para aprender a tocar guitarra</p>
                    <a href='/login'>
                        <Button className="btn--blue homePage__leftContainer__button">Comenzar</Button>
                    </a>
                </div>
                <div className='homePage__rightContainer'>
                    <GuitarIllustration className='guitarIllustration' />
                </div>
            </main>
        </React.Fragment>
    )
}

export { Home }