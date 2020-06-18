import React, { useEffect, useState } from 'react';
import { ITournament } from '../Tournament';
import TournamentTile from './TournamentTile';

interface Props {
  tournaments: ITournament[] | undefined;
  pagination?: boolean;
}

const TournamentTilesList = ({tournaments, pagination} : Props) => {
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
                  onClick={() => {}}
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
    <div>
        {tournamentTiles}
    </div>
  );
}

export default TournamentTilesList;