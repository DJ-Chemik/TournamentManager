import React from 'react';
import { ITournament } from '../Tournament';

interface Props {
    tournament?: ITournament;
    goToMainPage: ()=>void;
    loggedUser: number;
}

const TournamentViewLadderPage = (props: Props) => {
    
    return(
        <div>
            <div>
                <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
            </div>
            <div>
                Turniej numer {props.tournament?.id}
            </div>

        </div>
    )
}

export default TournamentViewLadderPage;