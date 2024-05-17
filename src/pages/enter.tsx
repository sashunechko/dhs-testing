import React from "react";

import { URLs } from "../__data__/urls";

import {Header} from "../components/header";
import {Form} from "../components/enter-form";
import {Footer} from "../components/footer";

export const Enter = () => {
  return (
    <>
      <title>Вход</title>
      <body>
          <Header/>
          <Form first='Вход' second='Войти' text='Регистрация' href={URLs.ui.registration}/>
          <Footer/>
      </body>
    </>
  );
};
export default Enter;