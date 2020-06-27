import React, { useState } from 'react';
import axios from 'axios';
import { ITournament } from '../Tournament';
import TournamentViewInfoPage from './TournamentViewInfoPage';
import TournamentViewLadderPage from './TournamentViewLadderPage';

interface Props {
  tournament?: ITournament;
  goToMainPage: ()=>void;
  whenUserWantLogIn: () => void;
  whenUserWantEditTournament: () => void;
  loggedUser: number;
}

enum ViewPageMode{
  STANDARD_INFO,
  LADDER
}

const TournamentViewPage = (props: Props) => {
  const [displayMode, setDisplayMode] = useState<ViewPageMode>(ViewPageMode.STANDARD_INFO); 

  const handleChangeView = () => {
    if (displayMode===ViewPageMode.LADDER) {
      setDisplayMode(ViewPageMode.STANDARD_INFO);
    }
    if (displayMode===ViewPageMode.STANDARD_INFO) {
      setDisplayMode(ViewPageMode.LADDER);
    }
  }

  return(
    <div>
      <button onClick={handleChangeView}>Przełącz tryb widoku</button>
      { displayMode===ViewPageMode.STANDARD_INFO &&
        <TournamentViewInfoPage
          tournament={props.tournament}
          goToMainPage={props.goToMainPage}
          whenUserWantLogIn={props.whenUserWantLogIn}
          whenUserWantEditTournament={props.whenUserWantEditTournament}
          loggedUser={props.loggedUser}
        />
      }
      { displayMode===ViewPageMode.LADDER &&
        <TournamentViewLadderPage
          tournament={props.tournament}
          goToMainPage={props.goToMainPage}
          loggedUser={props.loggedUser}
        />
      }      
    </div>
    
  )  
}

export default TournamentViewPage;