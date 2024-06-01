import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {StyledPhoto, BgPhoto, BgBio, Info, Box, RedButton, Text, MaxPhoto, Button1} from './profile.styled';
import { useState } from 'react';

export const Profile = ({ imgSrc }) => (
    <>
        <Photo imgSrc={imgSrc} />
        <Bio />
    </>
);

const Photo = ({ imgSrc }) => (
    <StyledPhoto>
        <BgPhoto>
            <MaxPhoto src={imgSrc} alt="Иконка фото профиля"  />
        </BgPhoto>
    </StyledPhoto>
);

const Bio = () => {
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [date, setDate] = useState(localStorage.getItem('date') || '');
    const [isEditing, setIsEditing] = useState(true);
    useEffect(() => {
            setName(localStorage.getItem('name') || '');
            setDate(localStorage.getItem('date') || '');
        }, []);
        
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSaveChanges = (event) => {
        event.preventDefault();
        localStorage.setItem('name', name);
        localStorage.setItem('date', date);
        setIsEditing(false); // Делаем поля неактивными
    };

    const handleEditData = () => {
        setIsEditing(true); // Поля снова станут активными
    };
    
    return (
    <BgBio>
        <Info>
            <Box type="text" 
                placeholder="Фамилия Имя" 
                name="name" 
                value={name}
                onChange={handleNameChange}
                required
                disabled={!isEditing} />

            <Box type="date" 
                placeholder="дд.мм.гггг" 
                name="date" 
                value={date}
                onChange={handleDateChange}
                required 
                disabled={!isEditing}/>

            <RedButton type="submit" 
                        form="id-info"
                        onClick={handleSaveChanges}>
                сохранить изменения</RedButton>
        </Info>
        <Button1 onClick={handleEditData}>
            <Text>редактировать данные</Text>
        </Button1>
    </BgBio>
);
}
Profile.propTypes = {
    imgSrc: PropTypes.string.isRequired
  };
  
  Photo.propTypes = {
    imgSrc: PropTypes.string.isRequired
    
};
