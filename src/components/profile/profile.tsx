import React from 'react';

export const Profile = ({ imgSrc }) => (
    <>
        <Photo imgSrc={imgSrc} />
        <Bio />
    </>
);

const Photo = ({ imgSrc }) => (
    <div className="photo">
        <div className="bg-photo">
            <img src={imgSrc} alt="Иконка фото профиля" />
        </div>
    </div>
);

const Bio = () => (
    <div className="bg-bio">
        <div className="info">
            <input className="box" type="text" placeholder="Фамилия Имя" name="name" required />
            <input className="box" type="date" placeholder="дд.мм.гггг" name="date" required />
            <button className="red-button" type="submit" form="id-info">сохранить изменения</button>
        </div>
        <button className="button">
            <p className="text-button-mini">редактировать данные</p>
        </button>
    </div>
);
