import React from "react";

import {Header} from "../components/header";
import {Footer} from "../components/footer";

import { record} from '../img';

export const Rec = () => {
  return (
    <>

    <Header/>

    <main className="main-content">
        <div className="bio">
            <div className="bg-record">
                <div className="info">
                    <input className="box1" type="text" placeholder="Фамилия Имя" name="name" required/>
                    <input className="box1" type="number" placeholder="+7(999)999 99 99" name="phone" required/>
                    <input className="box1" type="date" placeholder="дд.мм.гггг" name="date" required/>
                    <input className="box1" type="time" placeholder="12-00" name="time" min="09:00" max="18:00" required/>
                    <select className="box1" id="специалист" name="фио специалиста">
                        <option value="1">Иванов</option>
                        <option value="2">Петров</option>
                        <option value="3">Сидоров</option>
                    </select>
                    <button className="red-button" type="submit" form="id-info">записаться</button>
                </div>
            </div>
            <img src={record} alt="Улыбающаяся девушка на фоне листьев" width="50%" />
        </div>
    </main>
 
    <Footer/>
    </>
  );
};
export default Rec;