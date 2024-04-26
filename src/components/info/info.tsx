import React from 'react';

export const InfoForm = () => {
    return (
        <div className="info">
            <NameInput />
            <PhoneInput />
            <DateInput />
            <TimeInput />
            <SpecialistSelect />
            <SubmitButton />
        </div>
    );
}

const NameInput = () => {
    return (
        <input className="box1" type="text" placeholder="Фамилия Имя" name="name" required />
    );
}

const PhoneInput = () => {
    return (
        <input className="box1" type="number" placeholder="+7(999)999 99 99" name="phone" required />
    );
}

const DateInput = () => {
    return (
        <input className="box1" type="date" placeholder="дд.мм.гггг" name="date" required />
    );
}

const TimeInput = () => {
    return (
        <input className="box1" type="time" placeholder="12-00" name="time" min="09:00" max="18:00" required />
    );
}

const SpecialistSelect = () => {
    return (
        <select className="box1" id="специалист" name="фио специалиста">
            <option value="1">Иванов</option>
            <option value="2">Петров</option>
            <option value="3">Сидоров</option>
        </select>
    );
}

const SubmitButton = () => {
    return (
        <button className="red-button" type="submit" form="id-info">записаться</button>
    );
}

export default InfoForm;
