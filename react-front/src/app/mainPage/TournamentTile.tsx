import React from 'react';

interface Props{
    name?: string;
    discipline?: string;
    date?: Date;
    onClick?: () => void;
}

const TournamentTile = (props: Props) => {
  
  return (
    <div className="TournamentTile" onClick={props.onClick}>
        {props.name}<br/>
        {props.discipline}<br/>
        {props.date}
    </div>
  );
}

export default TournamentTile;