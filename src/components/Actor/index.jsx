import React from "react";
import "./style.css";

const Actor = ({name, as}) => {
    return (
        <div className = "actorlist">
            <div className = "actor">
                <p className = "actor--name">{name}</p>
                <p className = "actor--as">{as}</p>
            </div>
        </div>
    )
}

export default Actor;