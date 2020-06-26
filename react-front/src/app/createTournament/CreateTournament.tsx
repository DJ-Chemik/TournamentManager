import React from 'react';
import axios from 'axios';
import useFormInput from '../../ownHooks/UseFormInput';

interface Props {
    goToMainPage: ()=>void;
    loggedUser: number;
}

const CreateTournament = (props: Props) => {
    const nameInput = useFormInput("");
    const disciplineInput = useFormInput("");
    const dateInput = useFormInput("");
    const lastDayInput = useFormInput("");
    const placeInput = useFormInput("");
    const maxPartiicipantsInput = useFormInput("");

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

    const createTournament = () => {
        const tournament = {
            name: String(nameInput.value),
            discipline: String(disciplineInput.value),
            time: dateInput.value,
            organizer: props.loggedUser,
            googleMap: String(placeInput.value),
            seededPlayers: 0,
            maxParticipants: maxPartiicipantsInput.value,

        }
        
        axios.post("http://localhost:8080/api/tournaments/add", tournament)
            .then( response => {
                console.log(response.data);
            })
            .catch( error => {
                console.log("Error: " + error);
            });
    }

    const handleSubmit = () => {
        if(checkAreAllFieldsCorrect()){
            createTournament();
            props.goToMainPage();
        }
    }

    return(
        <div>
            <div>
                <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
            </div>
            Nazwa: <input type="text" onChange={nameInput.onChange}/><br/>
            Dyscyplina: <input type="text" onChange={disciplineInput.onChange}/><br/>
            Data turnieju: <input type="date" onChange={dateInput.onChange}/><br/>
            Ostatni dzień zgłoszeń: <input type="date" onChange={lastDayInput.onChange}/><br/>
            Miejsowość: <input type="text" onChange={placeInput.onChange}/><br/>
            Maksymalnie uczestników: <input type="number" onChange={maxPartiicipantsInput.onChange}/><br/>
            <button onClick={handleSubmit}>Zorganizuj turniej</button>
        </div>
    )
}

export default CreateTournament;