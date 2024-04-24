import React from "react";

import '../css/style.css';

import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {List} from "../components/list-of-tests";
import {Search} from "../components/search-form";
import {Filter} from "../components/filters";
import {Head} from "../components/testlist-head";

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