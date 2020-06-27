import React from 'react';

interface Props{
    name?: string;
    surname?: string;
    onClick?: () => void;
}

const UserTile = (props: Props) => {
  
  return (
    <div className="UserTile" onClick={props.onClick}>
        {props.name}<br/>
        {props.surname}
    </div>
  );
}

export default UserTile;