import React from 'react';

interface Props{
    name?: string;
    surname?: string;
    onClick?: () => void;
    width?: string;
}

const UserTile = (props: Props) => {
  
  return (
    <div className="UserTile" style={{width: props.width, backgroundColor: "#aaddcc", margin: "5px"}} onClick={props.onClick}>
        {props.name}<br/>
        {props.surname}
    </div>
  );
}

export default UserTile;