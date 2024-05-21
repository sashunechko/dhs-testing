import React from 'react';

import {StyledPhoto, BgPhoto, BgBio, Info, Box, RedButton, Button, Text} from './profile.styled';

export const Profile = ({ imgSrc }) => (
    <>
        <Photo imgSrc={imgSrc} />
        <Bio />
    </>
);

const Photo = ({ imgSrc }) => (
    <StyledPhoto>
        <BgPhoto>
            <img src={imgSrc} alt="Иконка фото профиля" />
        </BgPhoto>
    </StyledPhoto>
);

const Bio = () => (
    <BgBio>
        <Info>
            <Box type="text" placeholder="Фамилия Имя" name="name" required />
            <Box type="date" placeholder="дд.мм.гггг" name="date" required />
            <RedButton type="submit" form="id-info">сохранить изменения</RedButton>
        </Info>
        <Button>
            <Text>редактировать данные</Text>
        </Button>
    </BgBio>
);
