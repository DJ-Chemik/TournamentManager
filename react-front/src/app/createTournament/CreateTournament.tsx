import React from 'react';
import useFormInput from '../../ownHooks/UseFormInput';

interface Props {
    goToMainPage: ()=>void;
}

const CreateTournament = (props: Props) => {
    const nameInput = useFormInput("");
    const disciplineInput = useFormInput("");
    const dateInput = useFormInput("");
    const lastDayInput = useFormInput("");
    const placeInput = useFormInput("");
    const maxPartiicipantsInput = useFormInput("");

    const checkAllFieldsNotEmpty = () => {
        if(nameInput.value && disciplineInput.value &&
            dateInput.value && lastDayInput.value &&
            placeInput.value && maxPartiicipantsInput.value){

                return true;
        }
        return false;
    }

    const handleSubmit = () => {
        if(checkAllFieldsNotEmpty()){

        }
    }

    return(
        <div>
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