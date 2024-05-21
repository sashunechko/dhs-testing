import React from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {List} from "../components/testlist/list-of-tests";
import {Search} from "../components/testlist/search-form";
import {Filter} from "../components/testlist/filters";
import {Head} from "../components/testlist/testlist-head";

export const Testlist = () => {
  return (
    <>
    <Header/>
    <Head/>
    <Search/>
    <Filter/>
    <List/>
    <Footer/>
    </>
  );
};
export default Testlist;