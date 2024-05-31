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
  const [isError, setIsError] = useState(false); // ошибка
  const [isError1, setIsError1] = useState(false); // пользователь уже зареган
  const [isError2, setIsError2] = useState(false); // неверный пароль
  const [isError3, setIsError3] = useState(false); // пользователь не найден
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
            {/*alert("Произошла ошибка.");*/}
            setIsError(true);
          });
      } else {
         {/* alert("Пользователь с таким почтовым адресом уже зарегистрирован.") */}
         setIsError1(true);
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
                {/*alert("Произошла ошибка.");*/}
                setIsError(true);
              });
          } else {
            {/* alert("Неверный пароль");*/}
            setIsError2(true);
          }
        } else {
          {/*alert("Пользователь не найден. Пройдите регистрацию.")*/}
          setIsError3(true);
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
        {isError && <p>Произошла ошибка. Пожалуйста, попробуйте еще раз.</p>}
        {isError1 && <p>Пользователь с таким почтовым адресом уже зарегистрирован. Войдите.</p>}
        {isError2 && <p>Неверный пароль. Пожалуйста, попробуйте еще раз. </p>}
        {isError3 && <p>Пользователь не найден. Пройдите регистрацию. </p>}
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
