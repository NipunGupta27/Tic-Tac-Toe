import { useState } from "react";

const Players = ({iname, symbol, isActive, onNameChange}) =>{

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(iname);

    const handleEditClick = () => {
      setIsEditing(editing => !editing);
      if(isEditing)
        onNameChange(symbol, playerName);
    }

    const handleInputChange = event => {
        setPlayerName(event.target.value);
    }
    // console.log(playerName);
    let btnCaption = 'EDIT';
    if(isEditing)
        btnCaption = 'Save';
    
    return <li className={isActive}>
        <span className="player"> 
            {!isEditing && <span className="player-name" >{playerName}</span>}
            {isEditing && <input type="text" value={playerName} onChange={handleInputChange}/>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
}

export default Players;