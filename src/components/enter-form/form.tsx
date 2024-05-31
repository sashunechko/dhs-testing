import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { URLs } from "../../__data__/urls";
{/*import Lottie from 'react-lottie';
import {Tip1} from '../../components/record/info/info.styled';
import {StyledLink, StyledTip} from '../../components/result/result.styled';*/}
import { StyledBg, StyledForm, StyledButton, StyledHeader, StyledInfo, StyledInput } from "./form.styled"; 
import * as animationData from '../../../src/assets/succes-submit.json';
import { useNavigate } from 'react-router-dom';
export function Form(props) {

  const [users, setUsers] = useState([]);
  const [isSuccess,setSuccess] = useState(false);
  const [success] = useState(true);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
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
            setSuccess(true);
            if (success) {
              navigate(URLs.ui.lk); 
          }
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
                setSuccess(true);
                if (success) {
                  navigate(URLs.ui.lk); 
              }
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

  
  };

  return (
    <StyledForm>
      {/* {isSuccess &&
      <div>
      <Lottie options={defaultOptions}
        height={400}
        width={400}/>
        <Tip1>
        <StyledTip>вы успешно вошли</StyledTip>
        <StyledLink to={URLs.ui.lk}>личный кабинет</StyledLink>
        </Tip1>
      </div> } */}
      <StyledBg>
        <StyledHeader>{props.first}</StyledHeader>
        <StyledInfo>
        <form onSubmit={handleSubmit}>
          <StyledInput type="email" placeholder="Email" name="email" value={email} onChange={handleEmailChange} required/>
          <StyledInput type="password" placeholder="Пароль" name="password" value={password} onChange={handlePasswordChange} required/>
          <StyledButton type="submit" >{props.second}</StyledButton>
        </form>
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
