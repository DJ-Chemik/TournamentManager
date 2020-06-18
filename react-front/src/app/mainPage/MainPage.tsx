import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './MainPage.css'
import { ITournament } from '../Tournament';
import TournamentTilesList from './TournamentTilesList';

const MainPage = () => {
  const [tournaments, setTournaments] = useState<ITournament[] | undefined>();

  useEffect( () => {
    fetchTournamentsDataFromApi();
  }, [])

  const fetchTournamentsDataFromApi = React.useCallback( () => {
    axios({
      "method": "GET",
      "url": "http://localhost:8080/api/tournaments",
    })
    .then((response) => {
      setTournaments(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
    })
  }, [])

  if(tournaments){
    return (
      <div>
        <TournamentTilesList tournaments={tournaments}/>
      </div>
    );
  }
  return <p> LOADER </p>;
}

export default MainPage;