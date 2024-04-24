import React from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";

export const Enter = () => {
  return (
    <>
      <title>Вход</title>
      <body>

          <Header/>

          <div className="reg">
                  <div className="bg-reg">
                      <h1 className="hh">Вход</h1>
                      <div className="reg-info">
                          <input className="box1" type="email" placeholder="Email" name="email" required/>
                          <input className="box1" type="password" placeholder="Пароль" name="password" required/>
                          <button className="red-button" type="submit" form="id-info">Войти</button>
                      </div>
                      <a href="">Регистрация</a>
                  </div>
          </div>

          <Footer/>

      </body>
    </>
  );
};
export default Enter;