import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './MainPage.css'
import { ITournament } from '../Tournament';
import TournamentTilesList from './TournamentTilesList';

interface Props {
  whenUserWantLogIn: () => void;
  whenUserWantRegister: () => void;
  goToOneTournamentInformation: (tournament: ITournament) => void;
}

const MainPage = (props: Props) => {
  const [tournaments, setTournaments] = useState<ITournament[] | undefined>();

  useEffect( () => {
    fetchTournamentsDataFromApi();
  }, [])

  const fetchTournamentsDataFromApi = React.useCallback( () => {
    axios({
      "method": "GET",
      "url": "http://localhost:8080/api/tournaments",
    })
    .then( (response) => {
      setTournaments(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
    })
  }, [])

  const handleButtonLogIn = () => {
    props.whenUserWantLogIn();
  }

  const handleButtonRegister = () => {
    props.whenUserWantRegister();
  }

  if(tournaments){
    return (
      <div>
        <div>
          <button onClick={handleButtonLogIn}>Zaloguj się</button>
          <button onClick={handleButtonRegister}>Zarejestruj się</button>
        </div>
        <TournamentTilesList 
          tournaments={tournaments}
          goToOneTournamentInformation={props.goToOneTournamentInformation} 
        />
      </div>
    );
  }
  return <p> LOADER </p>;
}

export default MainPage;