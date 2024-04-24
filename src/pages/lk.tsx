import React from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";

import { person} from '../img';

export const Lk = () => {
  return (
    <>

    <Header/>

    <main className="main-content">
        <div className="wrapper">
            <div className="bio">
                <div className="photo">
                    <div className="bg-photo">
                        <img src={person} alt="Иконка фото профиля" />
                    </div>
                </div>
                
                <div className="bg-bio">
                    <div className="info">
                        <input className="box" type="text" placeholder="Фамилия Имя" name="name" required/>
                        <input className="box" type="date" placeholder="дд.мм.гггг" name="date" required/>
                        <button className="red-button" type="submit" form="id-info">сохранить изменения</button>
                    </div> 
                    <button className="button" >
                        <p className="text-button-mini">редактировать данные</p>
                    </button>
                </div>
            </div>
            <button className="button" type="submit" form="id-info" >
                <input type="file" id="imageInput" accept="image/*" />
            </button>
        </div>
    </main>
    <nav className="nav-lk">
        
        <button className="link-button"> 
            <p className="link-contrast-button" >РЕЗУЛЬТАТЫ</p>
        </button>
        <button className="link-button"> 
            <p className="link-contrast-button" >ЗАПИСИ</p>
        </button>
        <button className="link-button"> 
            <a className="link-contrast-button" href="#запись">ЗАПИСАТЬСЯ</a>
        </button>
        
    </nav>
    
    <Footer/>

    </>
  );
};
export default Lk;