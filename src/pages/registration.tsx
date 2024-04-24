import React from "react";

import {Header} from "../components/header";
import {Form} from "../components/enter-form";
import {Footer} from "../components/footer";

export const Reg = () => {
  return (
    <>
    <Header/>
    <Form first='Регистрация' second='Зарегистрироваться' third='Войти'/>
    <Footer/>
    </>
  );
};
export default Reg;