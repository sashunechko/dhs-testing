import React from "react";

import {Header} from "../components/header";
import {Profile} from "../components/profile";
import {Nav} from "../components/nav-lk";
import {Footer} from "../components/footer";


import { person} from '../img';

export const Lk = () => {
  return (
    <>

    <Header/>

    <main className="main-content">
        <div className="wrapper">
            <div className="bio">
                <Profile imgSrc={person} />
            </div>
            <button className="button" type="submit" form="id-info" >
                <input type="file" id="imageInput" accept="image/*" />
            </button>
        </div>
    </main>
    <Nav/>
    <Footer/>

    </>
  );
};
export default Lk;