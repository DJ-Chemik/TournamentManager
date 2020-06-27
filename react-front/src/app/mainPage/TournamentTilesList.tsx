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
  const [amoutPages, setAmountPages] = useState<number>(1);
  const [actualPage, setActualPage] = useState<number>(1);
  
  // const initializeListFromProps = React.useCallback( () => {
  //   if(tournaments){
  //     const tenTournaments = [];
  //     let firstIndex = actualPage * 10 - 10;
  //     let lastIndex = actualPage * 10 - 1;
  //     for (let i = firstIndex; i <= lastIndex; i++) {
  //       tenTournaments.push(tournaments[i]);        
  //     }
      
  //     return(
  //       tenTournaments.map( (tournament: ITournament) => {
  //           return(
  //             <ul key={tournament.id}>
  //               <TournamentTile
  //                 name={tournament.name}
  //                 discipline={tournament.discipline}
  //                 date={tournament.time}
  //                 onClick={()=>{ goToOneTournamentInformation(tournament)}}
  //               />
  //             </ul>
  //           )
  //         }
  //       )
  //     );
  //   }
  //   return null;
  // },[goToOneTournamentInformation, tournaments])

  const initializeListFromProps = React.useCallback( () => {
    if(tournaments){
      const tenTournaments: ITournament[] = [];
      let firstIndex = actualPage * 10 - 10;
      let lastIndex = actualPage * 10 - 1;
      for (let i = firstIndex; i <= lastIndex; i++) {
        if(tournaments[i]){
          tenTournaments.push(tournaments[i]);        
        }else{
          break;
        }
      }
      console.log(tenTournaments);
      
      
      return(
        tenTournaments.map( (tournament: ITournament) => {
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
  },[goToOneTournamentInformation, tournaments, actualPage])

  useEffect( () => {
    if(tournaments?.length){
      setAmountPages(tournaments?.length / 10)
    }
    const tmp = initializeListFromProps();
    setTournamentTiles(tmp);
  }, [tournaments, initializeListFromProps]);
  
  useEffect(()=>{
    const tmp = initializeListFromProps();
    setTournamentTiles(tmp);
  }, [actualPage])
  
  const handleClickPreviousPage = () => {
    if(actualPage>1){
      setActualPage(actualPage - 1);
    }
  }

  const handleClickNextPage = () => {
    if(actualPage<amoutPages){
      setActualPage(actualPage + 1);
    }
  }
  
  return (
    <div>
        {tournamentTiles}
        <div>
          <button onClick={handleClickPreviousPage}>Poprzednia strona</button>
          Aktualna strona: {actualPage}
          <button onClick={handleClickNextPage}>Następna strona</button>
        </div>
    </div>
  );
}

export default TournamentTilesList;