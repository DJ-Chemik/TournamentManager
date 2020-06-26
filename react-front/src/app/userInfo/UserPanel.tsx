import React from 'react';
import TournamentTilesList from '../mainPage/TournamentTilesList';
import { ITournament } from '../Tournament';

interface Props {
    goToMainPage: () => void;
    tournaments: ITournament[] | undefined;
    goToOneTournamentInformation: (tournament: ITournament) => void;
    loggedUser: number;
}

const UserPanel = (props : Props) => {
      
  return (
    <div>
        <div>
            <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
        </div>
        <h1>Lista turniejów na jakie jesteś zapisany</h1>
        <TournamentTilesList
            tournaments={props.tournaments}
            goToOneTournamentInformation={props.goToOneTournamentInformation}
        />
    </div>
  );
}

export default UserPanel;