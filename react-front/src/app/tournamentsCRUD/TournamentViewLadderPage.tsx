import React from 'react';
import { ITournament } from '../Tournament';
import UserTile from '../userInfo/UserTile';
import { User } from '../User';

interface Props {
    tournament?: ITournament;
    goToMainPage: ()=>void;
    loggedUser: number;
}

const TournamentViewLadderPage = (props: Props) => {
    
    // const initializeListOfUserTiles = React.useCallback( () => {
    //     if(participants){
          
    //       return(
    //         participants.map( (user: User) => {
    //             return(
    //               <ul key={user.id}>
    //                 <UserTile
    //                   name={user.name}
    //                   surname={user.surname}
    //                   onClick={()=>{ goToOneTournamentInformation(user)}}
    //                 />
    //               </ul>
    //             )
    //           }
    //         )
    //       );
    //     }
    //     return null;
    // },[tournament])

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