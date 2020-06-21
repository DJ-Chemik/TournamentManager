import React, { useState } from 'react';

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

interface User {
  id: number,
  name: string,
  surname: string,
  email: string,
  password: string,
  accountActivated: boolean
}

const Tournament = (tournament: ITournament) => {
  const [id, setId] = useState();
  

  return (
    <div>
      
    </div>
  );
}

export default Tournament;