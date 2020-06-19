import React, { useState } from 'react';
import './App.css';
import LoginPage from './logging/LoginPage';
import MainPage from './mainPage/MainPage';
import TournamentViewPage from './tournamentViewPage/TournamentViewPage';

export enum Pages {
  Main,
  Login,
  Tournament
}

function App() {
  const [actualPage, setActualPage] = useState<Pages>(Pages.Main);
  if(actualPage===Pages.Main){
    return (
      <div className="App">        
        <MainPage
          whenUserWantLogIn={() => { setActualPage(Pages.Login); }}
          whenUserWantRegister={() => { setActualPage(Pages.Login); }}
          goToOneTournamentInformation={() => { setActualPage(Pages.Tournament) }}
        />
      </div>
    );
  }
  if(actualPage===Pages.Login){
    return (
      <div className="App">        
        <LoginPage
          goToMainPage={()=>{setActualPage(Pages.Main)}}
        />
      </div>
    );
  }
  if(actualPage===Pages.Tournament){
    return (
      <div className="App">        
        <TournamentViewPage
          goToMainPage={()=>{setActualPage(Pages.Main)}}
        />
      </div>
    );
  }
}

export default App;
