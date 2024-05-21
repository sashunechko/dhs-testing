import React from 'react';

import {Info, Box, Select, Button} from './info.styled';

export const InfoForm = () => {
    return (
        <Info>
            <NameInput />
            <PhoneInput />
            <DateInput />
            <TimeInput />
            <SpecialistSelect />
            <SubmitButton />
        </Info>
    );
}

const NameInput = () => {
    return (
        <Box type="text" placeholder="Фамилия Имя" name="name" required />
    );
}

const PhoneInput = () => {
    return (
        <Box type="number" placeholder="+7(999)999 99 99" name="phone" required />
    );
}

const DateInput = () => {
    return (
        <Box type="date" placeholder="дд.мм.гггг" name="date" required />
    );
}

const TimeInput = () => {
    return (
        <Box type="time" placeholder="12-00" name="time" min="09:00" max="18:00" required />
    );
}

const SpecialistSelect = () => {
    return (
        <Select id="специалист" name="фио специалиста">
            <option value="1">Иванов</option>
            <option value="2">Петров</option>
            <option value="3">Сидоров</option>
        </Select>
    );
}

const SubmitButton = () => {
    return (
        <Button type="submit" form="id-info">записаться</Button>
    );
}

export default InfoForm;