import React from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {ListPsycho} from "../components/listPsycho";

export const PsychoPage = () => {
  return (
    <>
    <Header/>
    <ListPsycho/>
    <Footer/>
    </>
  );
};
export default PsychoPage;