import React from "react";
import './styles/Home.css'
import HomeGif from '../assets/images/Home.gif'

function Home(){
    return(
        <div className="home">
            <h1>Bem vindo(a) a minha resolução dos exercícios</h1>
            <img src={HomeGif} alt="Gif" className="img_home"/>
        </div>
    );
};

export default Home;