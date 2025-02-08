import React from "react";

import { URLs } from "../__data__/urls";

import {Header} from "../components/header";
import {Form} from "../components/enter-form";
import {Footer} from "../components/footer";
import i18n from "../i18n";

export const Reg = () => {
  return (
    <>
    <Header/>
    <Form first={i18n.t('reg')} second={i18n.t('reg')} text={i18n.t('in')} href={URLs.ui.enter}/>
    <Footer/>
    </>
  );
};
export default Reg;