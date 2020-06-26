import React from 'react';
import axios from 'axios';
import { ITournament } from '../Tournament';
import useFormInput from '../../ownHooks/UseFormInput';

interface Props {
  goToMainPage: () => void;
  loggedUser: number;
  tournament: ITournament | undefined;
}

const TournamentEditPage = (props: Props) => {
  const nameInput = useFormInput(props.tournament?.name);
  const disciplineInput = useFormInput(props.tournament?.discipline);
  const dateInput = useFormInput(props.tournament?.time);
  const lastDayInput = useFormInput(props.tournament?.lastDayOfApplications);
  const placeInput = useFormInput(props.tournament?.googleMap);
  const maxPartiicipantsInput = useFormInput(props.tournament?.maxParticipants);

  const checkAreAllFieldsCorrect = () => {        
    if(nameInput.value && disciplineInput.value &&
        dateInput.value && lastDayInput.value &&
        placeInput.value && maxPartiicipantsInput.value){
            let currectDate = new Date();
            currectDate.setHours(23,59);
            let tournamentDate = new Date(dateInput.value);
            let lastDayOfApplication = new Date(lastDayInput.value);
            if(tournamentDate >= currectDate && 
                lastDayOfApplication >= currectDate &&
                tournamentDate >= lastDayOfApplication){
                return true;
            }else{
                console.log("Wprowadź prawidłowe daty");
                return false;
            }
      }
      return false;
  }

  const editTournament = () => {
    const tournament = {
        id: props.tournament?.id,
        name: String(nameInput.value),
        discipline: String(disciplineInput.value),
        time: dateInput.value,
        lastDayOfApplications: lastDayInput.value,
        organizer: props.loggedUser,
        googleMap: String(placeInput.value),
        maxParticipants: maxPartiicipantsInput.value,
    }
      
    // console.log(lastDayInput.value);

    axios.put("http://localhost:8080/api/tournaments/update", tournament)
        .then( response => {
            console.log(response.data);
            props.goToMainPage();
        })
        .catch( error => {
            console.log("Error: " + error);
        });
  }

  const handleSubmit = () => {
      if(checkAreAllFieldsCorrect()){
          editTournament();
          
      }
  }

  return(
    <div>
        <div>
          <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
        </div>
        Nazwa: <input type="text" value={nameInput.value} onChange={nameInput.onChange}/><br/>
        Dyscyplina: <input type="text" value={disciplineInput.value} onChange={disciplineInput.onChange}/><br/>
        Data turnieju: <input type="date" value={dateInput.value} onChange={dateInput.onChange}/><br/>
        Ostatni dzień zgłoszeń: <input type="date" value={lastDayInput.value} onChange={lastDayInput.onChange}/><br/>
        Miejsowość: <input type="text" value={placeInput.value} onChange={placeInput.onChange}/><br/>
        Maksymalnie uczestników: <input type="number" value={maxPartiicipantsInput.value} onChange={maxPartiicipantsInput.onChange}/><br/>
        <button onClick={handleSubmit}>Edytuj turniej</button>
    </div>
  )
}

export default TournamentEditPage;