import React from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Res} from "../components/result";

import '../css/style.css';
import '../css/record.css';

export const Result = () => {
  return (
    <>
    <Header/>
    <Res/>
    <Footer/>
    </>
  );
};
export default Result;