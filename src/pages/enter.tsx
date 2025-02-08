import React from "react";

import { URLs } from "../__data__/urls";

import {Header} from "../components/header";
import {Form} from "../components/enter-form";
import {Footer} from "../components/footer";
import i18n from "../i18n";

export const Enter = () => {
  return (
    <>
      <title>Вход</title>
      <body>
          <Header/>
          <Form first={i18n.t('in')} second={i18n.t('in')} text={i18n.t('reg')} href={URLs.ui.registration}/>
          <Footer/>
      </body>
    </>
  );
};
export default Enter;