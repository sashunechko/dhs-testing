import React from "react"

import { header} from '../../img';

export class Head extends React.Component{
    render(){
        return (
            <>
            <p className="pic">
                <img src={header} alt="Девушка разговаривает с психологом." width="60%"
                height="420px"/>
            </p>

            <h1 className="hh">ТЕСТЫ ОНЛАЙН</h1>
                    </>
                    )
            }
}