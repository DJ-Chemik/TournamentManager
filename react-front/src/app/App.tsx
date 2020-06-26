import React, { useState } from 'react';
import './App.css';
import LoginPage from './logging/LoginPage';
import MainPage from './mainPage/MainPage';
import TournamentViewPage from './tournamentViewPage/TournamentViewPage';
import { ITournament } from './Tournament';
import CreateTournament from './createTournament/CreateTournament';
import UserPanel from './userInfo/UserPanel';

export enum Pages {
  Main,
  Login,
  Tournament,
  CreateTournament,
  UserInfo
}

function App() {
  const [actualPage, setActualPage] = useState<Pages>(Pages.Main);
  const [selectedTournament, setSelecetedTournament] = useState<ITournament>();
  const [selectedTournaments, setSelecetedTournaments] = useState<ITournament[]>();
  const [loggedUser, setLoggeduser] = useState<number>(-1);

  if(actualPage===Pages.Main){
    return (
      <div className="App">        
        <MainPage
          whenUserWantLogIn={() => { setActualPage(Pages.Login); }}
          whenUserWantLogOut={() => { setLoggeduser(-1); }}
          whenUserWantRegister={() => { setActualPage(Pages.Login); }}
          whenUserWantOrganizeTournament={() => { setActualPage(Pages.CreateTournament); }}
          whenUserWantSeeInformationAboutHimself={(tournaments) => {
            setSelecetedTournaments(tournaments);
            setActualPage(Pages.UserInfo)}
          }
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
          whenUserWantLogIn={() => { setActualPage(Pages.Login); }}
          loggedUser={loggedUser}
        />
      </div>
    );
  }
  if(actualPage===Pages.CreateTournament){
    return (
      <div className="App">        
        <CreateTournament
          goToMainPage={()=>{setActualPage(Pages.Main)}}
          loggedUser={loggedUser}
        />
      </div>
    );
  }
  if(actualPage===Pages.UserInfo){
    return (
      <div className="App">        
        <UserPanel
          goToMainPage={()=>{setActualPage(Pages.Main)}}
          goToOneTournamentInformation={(tournament) => { setSelecetedTournament(tournament); setActualPage(Pages.Tournament) }}
          tournaments={selectedTournaments}
          loggedUser={loggedUser}
        />
      </div>
    );
  }
}

export default App;
