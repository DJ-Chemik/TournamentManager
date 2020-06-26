import React from 'react';
import axios from 'axios';
import Tournament, { ITournament } from '../Tournament';

interface Props {
  tournament?: ITournament;
  goToMainPage: ()=>void;
  whenUserWantLogIn: () => void;
  loggedUser: number;
}

const TournamentViewPage = (props: Props) => {

  const handleClickSignUpForTournament = () => {
    axios({
      "method": "POST",
      "url": "http://localhost:8080/api/signusertotournament",
      "params": {
        tournamentId: props.tournament?.id,
        userId: props.loggedUser,
      }
    })
      .then( response => {
          console.log(response.data);
      })
      .catch( error => {
          console.log("Error: " + error);
      });
  }
  
  const handleClickEditTournament = () => {
    
  }

  const InteractionsWithTournament = () => {
    if (props.loggedUser===props.tournament?.organizer.id) {
      return(
        <div>
          <button onClick={handleClickSignUpForTournament}>Zapisz się na turniej</button>
          <button onClick={handleClickEditTournament}>Edytuj informacje o turnieju</button>
        </div>
      )
    }else if(props.loggedUser!==-1){
      return(
        <div>
          <button onClick={handleClickSignUpForTournament}>Zapisz się na turniej</button>
        </div>
      )
    }

    return(
      <div>
        <button onClick={props.whenUserWantLogIn}>Zaloguj się aby móc zapisać się na turniej lub edytować go</button>
      </div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
      </div>
      <div>
        Turniej numer {props.tournament?.id}
      </div>
      <InteractionsWithTournament/>
      <div>
        Nazwa: {props.tournament?.name} <br/>
        Dyscyplina: {props.tournament?.discipline} <br/>
        Organizator: {props.tournament?.organizer.name} {props.tournament?.organizer.surname}<br/>
        Data rozgrywania: {props.tournament?.time} <br/>
        Google Map: {props.tournament?.googleMap} <br/>
      </div>
      <div>
        Liczba zgłoszonych uczestników: {props.tournament?.seededPlayers} / {props.tournament?.maxParticipants} <br/>
        Możliwość składania zgłoszeń do: {props.tournament?.lastDayOfApplications}  
      </div>
      <div style={{backgroundColor: "red"}}>
        Loga sponsorów: @TODO
      </div>
    </div>
  );
}

export default TournamentViewPage;