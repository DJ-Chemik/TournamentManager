import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ITournament } from '../Tournament';
import { User } from '../User';
import LadderOneStep from './LadderOneStep';

interface Props {
    tournament?: ITournament;
    goToMainPage: ()=>void;
    loggedUser: number;
}

const TournamentViewLadderPage = (props: Props) => {
    const [participants, setParticipants] = useState<User[]>();
    const [participantsCount, setParticipantsCount] = useState<number>();
    const [ladder, setLadder] = useState<JSX.Element>();

    const getParticipants = useCallback(() => {
        axios({
          "method": "GET",
          "url": "http://localhost:8080/api/tournament/participants",
          "params": {
            id: props.tournament?.id
          }
        })
          .then( response => {
              setParticipants(response.data);
              setParticipantsCount(participants?.length);
          })
          .catch( error => {
              console.log("Error: " + error);
          });
    }, [participants, props.tournament] )

    useEffect(()=>{
        getParticipants();
    }, [props.tournament, getParticipants])

    useEffect(()=>{
        if(participantsCount){
            setLadder(initializeLadder());
        }else{
            setLadder(<div>Trwa pobieranie listy uczestników</div>)
        }
    }, [participantsCount])

    const initializeLadder = () => {
        let numberOfSteps = 0;
        const participantsNumberInStep = [];
        
        let tmpCount = participantsCount;
        while(tmpCount!==1){
            participantsNumberInStep.push(tmpCount);
            if(tmpCount){
                tmpCount= Math.ceil(tmpCount / 2);
            }
            numberOfSteps = numberOfSteps + 1;
        }
        participantsNumberInStep.push(1);
        numberOfSteps = numberOfSteps + 1;

        const mockedParticipants = [];
        mockedParticipants.push(participants);
        for (let i = 0; i < numberOfSteps; i++) {
            const users: any[] = [];
            if(mockedParticipants){
                    console.log(mockedParticipants[i]);
                    const tmp = mockedParticipants[i];
                    if(tmp){
                        for (let j = 0; j < tmp.length; j+=2) {
                            if(Math.random()<0.5){
                                users.push(tmp[j])
                            }else{
                                users.push(tmp[j+1])
                            }                      
                        }
                    }
            }
            mockedParticipants?.push(users); 
        }

        return(
            <div>
                {mockedParticipants?.map((mocked) => {
                    return(
                        <LadderOneStep
                            participantsInStep={mocked?.length as number}
                            participants={mocked as User[]}
                        />
                    )
                })}
            </div>
        )

    }

    return(
        <div>
            <div>
                <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
            </div>
            <div>
                Turniej numer {props.tournament?.id}
            </div>
            <div>
                {ladder}
            </div>

        </div>
    )
}

export default TournamentViewLadderPage;