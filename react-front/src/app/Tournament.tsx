import React, { useEffect, useState } from 'react';

export interface ITournament {
    id: number,
    name: string,
    discipline: string,
    time: Date,
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