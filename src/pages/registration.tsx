import React from "react";

import { URLs } from "../__data__/urls";

import {Header} from "../components/header";
import {Form} from "../components/enter-form";
import {Footer} from "../components/footer";

export const Reg = () => {
  return (
    <>
    <Header/>
    <Form first='Регистрация' second='Зарегистрироваться' text='Войти' href={URLs.ui.enter}/>
    <Footer/>
    </>
  );
};
export default Reg;