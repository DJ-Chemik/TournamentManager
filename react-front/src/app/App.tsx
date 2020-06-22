import React, { useState } from 'react';
import './App.css';
import LoginPage from './logging/LoginPage';
import MainPage from './mainPage/MainPage';
import TournamentViewPage from './tournamentViewPage/TournamentViewPage';
import { ITournament } from './Tournament';

export enum Pages {
  Main,
  Login,
  Tournament
}

function App() {
  const [actualPage, setActualPage] = useState<Pages>(Pages.Main);
  const [selectedTournament, setSelecetedTournament] = useState<ITournament>();
  const [loggedUser, setLoggeduser] = useState<number>(-1);

  if(actualPage===Pages.Main){
    return (
      <div className="App">        
        <MainPage
          whenUserWantLogIn={() => { setActualPage(Pages.Login); }}
          whenUserWantRegister={() => { setActualPage(Pages.Login); }}
          goToOneTournamentInformation={(tournament) => { setSelecetedTournament(tournament); setActualPage(Pages.Tournament) }}
          loggedUser={loggedUser}
        />
      </div>
    );
  }
  if(actualPage===Pages.Login){
    return (
      <div className="App">        
        <LoginPage
          goToMainPage={()=>{setActualPage(Pages.Main)}}
          loginUser={(id: number)=>{setLoggeduser(id)}}
        />
      </div>
    );
  }
  if(actualPage===Pages.Tournament){
    return (
      <div className="App">        
        <TournamentViewPage
          tournament={selectedTournament}
          goToMainPage={()=>{setActualPage(Pages.Main)}}
        />
      </div>
    );
  }
}

export default App;
