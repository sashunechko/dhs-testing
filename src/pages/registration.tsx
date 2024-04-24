import React from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";

export const Reg = () => {
  return (
    <>
    <Header/>

    <div className="reg">
            <div className="bg-reg">
                <h1 className="hh">Регистрация</h1>
                <div className="reg-info">
                    <input className="box1" type="email" placeholder="Email" name="email" required/>
                    <input className="box1" type="password" placeholder="Пароль" name="password" required/>
                    <button className="red-button" type="submit" form="id-info">Зарегистрироваться</button>
                </div>
                <a href="">Вход</a>
            </div>
    </div>

    <Footer/>
    </>
  );
};
export default Reg;