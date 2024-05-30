import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { URLs } from "../../__data__/urls";

import { StyledBg, StyledForm, StyledButton, StyledHeader, StyledInfo, StyledInput } from "./form.styled";

export function Form(props) {

  const [users, setUsers] = useState([]);
useEffect(() => {
  fetch(`${URLs.api.main}/users-data`)
      .then(response => response.json())
      .then(data => {
          setUsers(data);
      })
      .catch(error => {
          console.error('Error fetching users:', error);
      });
}, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email,
      password
    };

    const findUser = users.find(user => user.eMail === email);

    if (props.first === "Регистрация") {
      if (!findUser) {
        fetch(`${URLs.api.main}/submit-reg`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            alert("Регистрация прошла успешно!");
          })
          .catch((error) => {
            console.error(error);
            alert("Произошла ошибка.");
          });
      } else {
          alert("Пользователь с таким почтовым адресом уже зарегистрирован.")
      }
    } else if(props.first === "Вход") {
        if(findUser) {
          if (findUser.password === password) {
            fetch(`${URLs.api.main}/submit-enter`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                alert("Вы успешно вошли в аккаунт!");
              })
              .catch((error) => {
                console.error(error);
                alert("Произошла ошибка.");
              });
          } else {
            alert("Неверный пароль");
          }
        } else {
          alert("Пользователь не найден. Пройдите регистрацию.")
        }
    }

    // Очистка полей формы
    setEmail('');
    setPassword('');
  };

  return (
    <StyledForm>
      <StyledBg>
        <StyledHeader>{props.first}</StyledHeader>
        <StyledInfo>
          <StyledInput type="email" placeholder="Email" name="email" value={email} onChange={handleEmailChange} required/>
          <StyledInput type="password" placeholder="Пароль" name="password" value={password} onChange={handlePasswordChange} required/>
          <StyledButton type="submit" onClick={handleSubmit}>{props.second}</StyledButton>
        </StyledInfo>
        <Link to={props.href}>{props.text}</Link>
      </StyledBg>
    </StyledForm>
  )
}

Form.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
