import React from "react";

import {Header} from "../components/header";
import {Form} from "../components/enter-form";
import {Footer} from "../components/footer";

export const Enter = () => {
  return (
    <>
      <title>Вход</title>
      <body>
          <Header/>
          <Form first='Вход' second='Войти' third='Регистрация'/>
          <Footer/>
      </body>
    </>
  );
};
export default Enter;