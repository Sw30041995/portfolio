import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Skills} from "./components/Skills/Skills";
import {Main} from "./components/Main/Main";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App;
