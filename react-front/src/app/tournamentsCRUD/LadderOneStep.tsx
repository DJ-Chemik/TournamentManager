import React from 'react';
import { User } from '../User';
import UserTile from '../userInfo/UserTile';

interface Props {
    participantsInStep: number;
    participants: User[];
}

const LadderOneStep = (props: Props) => {

    if(props.participants){
        return(
            <div style={{backgroundColor: "#eee", margin: "30px", display: "flex"}}>
                {props.participants.map((participant)=>{
                    return(
                        <UserTile
                            name={participant.name}
                            surname={participant.surname}
                            width={String(window.innerWidth / props.participantsInStep) + "%"}
                        />
                    )
                })}
            </div>
        )
    }else{
        return(
            <div style={{backgroundColor: "#eee", margin: "30px", display: "flex"}}>
                ---
            </div>
        )
    }
}

export default LadderOneStep;