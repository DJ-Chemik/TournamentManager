import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './MainPage.css'
import { ITournament } from '../Tournament';
import TournamentTilesList from './TournamentTilesList';

interface Props {
  whenUserWantLogIn: () => void;
  whenUserWantLogOut: () => void;
  whenUserWantRegister: () => void;
  goToOneTournamentInformation: (tournament: ITournament) => void;
  loggedUser: number;
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

  const handleButtonLogOut = () => {
    props.whenUserWantLogOut();
  }

  const handleButtonRegister = () => {
    props.whenUserWantRegister();
  }

  const getActualLoggedUser = () => {
    
    
  }

  if(tournaments){
    const logged = "Aktualnie zalogowany użytkownik: ";
    const nonLogged = "Nie jesteś jeszcze zalogowany :<";
    let result;
    if (props.loggedUser!==-1) {
          result = logged + props.loggedUser;
          return (
            <div>
              <div>
                {result}
                <button onClick={handleButtonLogOut}>Wyloguj się</button>
              </div>
              <TournamentTilesList 
                tournaments={tournaments}
                goToOneTournamentInformation={props.goToOneTournamentInformation} 
              />
            </div>
          );
    }else{
        result = nonLogged;
        return (
          <div>
            <div>
                <button onClick={handleButtonLogIn}>Zaloguj się</button>
                <button onClick={handleButtonRegister}>Zarejestruj się</button>
                {result}
            </div>
            <TournamentTilesList 
              tournaments={tournaments}
              goToOneTournamentInformation={props.goToOneTournamentInformation} 
            />
          </div>
        );
    }
    
  }
  return <p> LOADER </p>;
}

export default MainPage;