import React, { useEffect, useState } from 'react';
import { ITournament } from '../Tournament';
import TournamentTile from './TournamentTile';

interface Props {
  tournaments: ITournament[] | undefined;
  pagination?: boolean;
  goToOneTournamentInformation: (tournament: ITournament) => void;
}

const TournamentTilesList = ({tournaments, pagination, goToOneTournamentInformation} : Props) => {
  const [tournamentTiles, setTournamentTiles] = useState<any>();
  
  const initializeListFromProps = React.useCallback( () => {
    if(tournaments){
      return(
        tournaments.map( (tournament: ITournament) => {
            return(
              <ul key={tournament.id}>
                <TournamentTile
                  name={tournament.name}
                  discipline={tournament.discipline}
                  date={tournament.time}
                  onClick={()=>{ goToOneTournamentInformation(tournament)}}
                />
              </ul>
            )
          }
        )
      );
    }
    return null;
  },[goToOneTournamentInformation, tournaments])

  useEffect( () => {
    const tmp = initializeListFromProps();
    setTournamentTiles(tmp);
  }, [tournaments, initializeListFromProps]);
  
  
  
  return (
    <div>
        {tournamentTiles}
    </div>
  );
}

export default TournamentTilesList;