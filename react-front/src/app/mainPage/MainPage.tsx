import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './MainPage.css'
import { ITournament } from '../Tournament';
import TournamentTilesList from './TournamentTilesList';
import useFormInput from '../../ownHooks/UseFormInput';

interface Props {
  whenUserWantLogIn: () => void;
  whenUserWantLogOut: () => void;
  whenUserWantRegister: () => void;
  whenUserWantOrganizeTournament: () => void
  whenUserWantSeeInformationAboutHimself: (tournaments: ITournament[]) => void;
  goToOneTournamentInformation: (tournament: ITournament) => void;
  loggedUser: number;
}

const MainPage = (props: Props) => {
  const [tournaments, setTournaments] = useState<ITournament[] | undefined>();
  const [filteredTournaments, setFilteredTournaments] = useState<ITournament[] | undefined>();
  const [userName, setUserName] = useState<string>("");
  const [userSurname, setUserSurname] = useState<string>("");
  const searchedTextInput = useFormInput("");

  const fetchTournamentsDataFromApi = React.useCallback( () => {
    axios({
      "method": "GET",
      "url": "http://localhost:8080/api/tournaments",
    })
    .then( (response) => {
      setTournaments(response.data);
      setFilteredTournaments(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
    })
  }, [])


  useEffect( () => {
    fetchTournamentsDataFromApi();

  }, [fetchTournamentsDataFromApi])

  
  const handleButtonLogIn = () => {
    props.whenUserWantLogIn();
  }

  const handleButtonLogOut = () => {
    props.whenUserWantLogOut();
  }

  const handleButtonRegister = () => {
    props.whenUserWantRegister();
  }

  const handleButtonOrganizeTournament = () => {
    props.whenUserWantOrganizeTournament();
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
      if(response.data){
        setUserName(response.data.name);
        setUserSurname(response.data.surname);
      }
    })
    .catch((error) => {
      console.log("Error: " + error);
    })
    
  }

  const handleButtonSeeParticipatesTournaments = () => {
    const fetchInfo = () => {
      axios.get("http://localhost:8080/api/user/participates", {params: {id: props.loggedUser}})
      .then( (response) => {
        props.whenUserWantSeeInformationAboutHimself(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      })
    }
    fetchInfo();    
  }

  const searchInTiles = () => {
    const tmp : ITournament[] = [];
    console.log(searchedTextInput.value);
    if (searchedTextInput.value) {
      tournaments?.forEach(tournament => {
        if(tournament.name.includes(searchedTextInput.value) || 
          tournament.discipline.includes(searchedTextInput.value)){
            tmp.push(tournament);
        }
      });  
      setFilteredTournaments(tmp);
    }else{
      setFilteredTournaments(tournaments);
    }
    console.log(searchedTextInput.value);
  }

  const deleteFilters = () => {
    setFilteredTournaments(tournaments);
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
                <button onClick={handleButtonOrganizeTournament}>Zorganizuj własny turniej</button>
                <button onClick={handleButtonSeeParticipatesTournaments}>Zobacz na jakie turnieje jesteś zapisany</button>
                {result}
                <button onClick={handleButtonLogOut}>Wyloguj się</button>
              </div>
              <div>
                  <input type="text" onChange={(e)=>{
                      searchedTextInput.onChange(e);
                      searchInTiles();
                      console.log(filteredTournaments);
                    }}>
                  </input>
                  <button onClick={deleteFilters}> Wyczyść filtry </button>
              </div>
              <TournamentTilesList 
                tournaments={filteredTournaments}
                goToOneTournamentInformation={props.goToOneTournamentInformation} 
                pagination={true}
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
            <div>
                  <input type="text" onChange={(e)=>{
                      searchedTextInput.onChange(e);
                      searchInTiles();
                      console.log(filteredTournaments);
                    }}>
                  </input>
                  <button onClick={deleteFilters}> Wyczyść filtry </button>
              </div>
            <TournamentTilesList 
              tournaments={filteredTournaments}
              goToOneTournamentInformation={props.goToOneTournamentInformation} 
            />
          </div>
        );
    }
    
  }
  return <p> LOADER </p>;
}

export default MainPage;