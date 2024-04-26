import React from "react";

import {Header} from "../components/header";
import {InfoForm} from "../components/info";
import {Footer} from "../components/footer";


import { record} from '../img';

export const Rec = () => {
  return (
    <>

    <Header/>

    <main className="main-content">
        <div className="bio">
            <div className="bg-record">
                <InfoForm/>
            </div>
            <img src={record} alt="Улыбающаяся девушка на фоне листьев" width="50%" />
        </div>
    </main>
 
    <Footer/>
    </>
  );
};
export default Rec;