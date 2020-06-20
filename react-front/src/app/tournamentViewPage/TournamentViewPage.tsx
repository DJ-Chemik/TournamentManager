import React from 'react';
import { ITournament } from '../Tournament';

interface Props {
  tournament?: ITournament;
  goToMainPage: ()=>void;
}

const TournamentViewPage = ({tournament, goToMainPage}: Props) => {
  return (
    <div>
      <div>
        <button onClick={goToMainPage}>Wróć do strony głównej</button>
      </div>
      <div>
        Turniej numer {tournament?.id}
      </div>
      <div>
        Nazwa: {tournament?.name} <br/>
        Dyscyplina: {tournament?.discipline} <br/>
        <div style={{backgroundColor: "red"}}>Organizator: @TODO</div> <br/>
        Data rozgrywania: {tournament?.time} <br/>
        Google Map: {tournament?.googleMap} <br/>
      </div>
      <div>
        Liczba zgłoszonych uczestników: {tournament?.seededPlayers} / {tournament?.maxParticipants} <br/>
        Możliwość składania zgłoszeń do: {tournament?.lastDayOfApplications}  
      </div>
    </div>
  );
}

export default TournamentViewPage;