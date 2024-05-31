import React, {useState} from "react"

import {Profile} from "../../lk/profile";

import { person} from '../../../assets';

import {MainContent, Wrapper, Bio, Button} from './main.styled';
import { useEffect } from "react";
import { StyledInfo } from "../../enter-form/form.styled";

export function Main() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const savedImage = localStorage.getItem('selectedImage');
        if (savedImage) {
            setSelectedImage(savedImage);
        }
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result.toString());
            localStorage.setItem('selectedImage', reader.result.toString());
        };        

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <MainContent>
                <Wrapper>
                    <Bio>
                        <Profile imgSrc={selectedImage || person} />
                    </Bio>
                    <Button type="submit" form="id-info" >
                        <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange} />
                    </Button>
                </Wrapper>
            </MainContent>
        </>
    )
}
