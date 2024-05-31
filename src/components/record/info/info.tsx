import React from 'react';
import Lottie from 'react-lottie';
import {useState} from 'react';
import { URLs } from "../../../__data__/urls";
import {Info, Box, Select, Button, Tip1, Center} from './info.styled';
import {StyledLink, StyledTip} from '../../../components/result/result.styled';
import * as animationData from '../../../assets/succes-submit.json';
export const InfoForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [isSuccess,setSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    };
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
  
    const handleSpecialistChange = (event) => {
      setSpecialist(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
        name,
        phone,
        date,
        time,
        specialist,
      };
  
      fetch(`${URLs.api.main}/submit-record`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSuccess(true);
        })
        .catch((error) => {
          console.error(error);
          setIsError(true);
        });
  
      setName('');
      setPhone('');
      setDate('');
      setTime('');
      setSpecialist('');
    };
  
    return (
        <Info>
          {isError && <p>Произошла ошибка. Пожалуйста, попробуйте еще раз.</p>}
          {isSuccess && 
          <Center>
            <Lottie options={defaultOptions}
              height={400}
              width={400}/>
              <Tip1>
              <StyledTip>Вы успешно записаны!</StyledTip>
              <StyledLink to={URLs.ui.testlist}>К тестам</StyledLink>
              </Tip1>
          </Center> }
          {!isSuccess &&   
          <form onSubmit={handleSubmit} >
            <Box type="text" placeholder="Фамилия Имя" name="name" value={name} onChange={handleNameChange}  required/>
            <Box type="phone" placeholder="+7(999)999 99 99" name="phone" value={phone} onChange={handlePhoneChange} required />
            <Box type="date" placeholder="дд.мм.гггг" name="date"  value={date} onChange={handleDateChange} required/>
            <Box type="time" placeholder="12-00" name="time" min="09:00" max="18:00"  value={time} onChange={handleTimeChange} required/>
            <Select name="фио специалиста" value={specialist} onChange={handleSpecialistChange}>
                <option value="1">Иванов</option>
                <option value="2">Петров</option>
                <option value="3">Сидоров</option>
            </Select>
            <Button type="submit">Записаться</Button>
          </form> }
        </Info>
    );
}

{/* 
const NameInput = () => {
    return (
        <Box placeholder="Фамилия Имя" name="name" required />
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
*/}

export default InfoForm;