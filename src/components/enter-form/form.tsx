import React from "react"

export function Form(props) {
    return (
        <>
        <div className="reg">
              <div className="bg-reg">
                  <h1 className="hh">{props.first}</h1>
                  <div className="reg-info">
                      <input className="box1" type="email" placeholder="Email" name="email" required/>
                      <input className="box1" type="password" placeholder="Пароль" name="password" required/>
                      <button className="red-button" type="submit" form="id-info">{props.second}</button>
                  </div>
                  <a href="">{props.third}</a>
              </div>
        </div>
        </>
    )
}
