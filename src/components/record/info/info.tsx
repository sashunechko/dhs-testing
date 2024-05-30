import React from 'react';
import {useState} from 'react';
import {Info, Box, Select, Button} from './info.styled';

export const InfoForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [specialist, setSpecialist] = useState('');

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
  
      fetch('/api/submit-record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert('Данные успешно отправлены!');
        })
        .catch((error) => {
          console.error(error);
          alert('Произошла ошибка :( ');
        });
  
      setName('');
      setPhone('');
      setDate('');
      setTime('');
      setSpecialist('');
    };
  
    return (
        <Info>
          <form id="id-info" onSubmit={handleSubmit} >
            <Box type="text" placeholder="Фамилия Имя" name="name" value={name} onChange={handleNameChange}  required/>
            <Box type="number" placeholder="+7(999)999 99 99" name="phone" value={phone} onChange={handlePhoneChange} required />
            <Box type="date" placeholder="дд.мм.гггг" name="date"  value={date} onChange={handleDateChange} required/>
            <Box type="time" placeholder="12-00" name="time" min="09:00" max="18:00"  value={time} onChange={handleTimeChange} required/>
            <Select id="специалист" name="фио специалиста" value={specialist} onChange={handleSpecialistChange}>
                <option value="1">Иванов</option>
                <option value="2">Петров</option>
                <option value="3">Сидоров</option>
            </Select>
          </form>
          <Button type="submit" form="id-info">записаться</Button>
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