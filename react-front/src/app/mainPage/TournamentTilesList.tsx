import React, { useEffect, useState } from 'react';
import { ITournament } from '../Tournament';
import TournamentTile from './TournamentTile';

interface Props {
  tournaments: ITournament[] | undefined;
}

const TournamentTilesList = ({tournaments} : Props) => {
  const [tournamentTiles, setTournamentTiles] = useState<any>();
  
  useEffect( () => {
    const tmp = initializeListFromProps();
    setTournamentTiles(tmp);
  }, [tournaments]);
  
  const initializeListFromProps = () => {
    if(tournaments){
      return(
        tournaments.map( (tournament: ITournament) => {
            return(
              <ul key={tournament.id}>
                <TournamentTile
                  name={tournament.name}
                  discipline={tournament.discipline}
                  date={tournament.time}
                />
              </ul>
            )
          }
        )
      );
    }
    return null;
  }
  
  return (
    <div className="TournamentTile">
        {tournamentTiles}
    </div>
  );
}

export default TournamentTilesList;