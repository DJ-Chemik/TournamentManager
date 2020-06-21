import React, { useState } from 'react';
import { User } from './logging/User';

export interface ITournament {
    id: number,
    name: string,
    discipline: string,
    time: Date,
    organizer: User, // Id of user who create tournament
    googleMap: string,
    maxParticipants: number,
    lastDayOfApplications: Date,
    seededPlayers: number
}

const Tournament = (tournament: ITournament) => {
  const [id, setId] = useState();
  

  return (
    <div>
      
    </div>
  );
}

export default Tournament;