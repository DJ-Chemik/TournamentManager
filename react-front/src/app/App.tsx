import React, { useState } from 'react';
import './App.css';
import LoginPage from './logging/LoginPage';
import MainPage from './mainPage/MainPage';
import TournamentViewPage from './tournamentViewPage/TournamentViewPage';

enum Pages {
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
          whenUserWantLogIn={() => {
            setActualPage(Pages.Login);
            console.log(actualPage);
          }}
          whenUserWantRegister={() => {
            setActualPage(Pages.Login);
          }}
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
        <TournamentViewPage/>
      </div>
    );
  }
}

export default App;
