import React from "react";

import {Header} from "../components/header";
import {Nav} from "../components/lk/navAccount";
import {Footer} from "../components/footer";
import {Main} from "../components/lk/mainAccount";

export const Account = () => {
  return (
    <>
    <Header/>
    <Main/>
    <Nav/>
    <Footer/>
    </>
  );
};
export default Account;