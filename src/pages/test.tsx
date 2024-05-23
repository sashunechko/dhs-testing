import React, {useState} from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Questions} from "../components/test";

export const Test = () => {

    return (
      <>
      <Header/>
      <Questions/>
      <Footer/>
      </>
    );
};

export default Test;