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
  const [userName, setUserName] = useState<string>("");
  const [userSurname, setUserSurname] = useState<string>("");

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

  const getInformationAboutActualUser = () => {
     axios({
      "method": "GET",
      "url": "http://localhost:8080/api/user",
      "params": {
        id: props.loggedUser
      }
    })
    .then( (response) => {
      setUserName(response.data.name);
      setUserSurname(response.data.surname);
    })
    .catch((error) => {
      console.log("Error: " + error);
    })
    
  }

  if(tournaments){
    const logged = "Jesteś zalogowany jako: ";
    const nonLogged = "Nie jesteś jeszcze zalogowany :<";
    let result;
    getInformationAboutActualUser();    
    if (props.loggedUser!==-1) {
          result = logged + userName + " " + userSurname + " ";
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