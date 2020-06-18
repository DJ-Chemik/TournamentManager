import React from 'react';

interface Props{
    name?: string;
    discipline?: string;
    date?: Date;
}

const TournamentTile = (props: Props) => {
  
  return (
    <div className="TournamentTileDiv">
        {props.name}<br/>
        {props.discipline}<br/>
        {props.date}
    </div>
  );
}

export default TournamentTile;