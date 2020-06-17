import React, { useEffect, useState } from 'react';

const MainPage = () => {
  const [tournaments, setTournaments] = useState();

  useEffect( () => {
    fetch( "http://localhost:8080/api/tournaments")
      .then(response => response.json())
      .then(jsonData => {
        console.log(jsonData);
        setTournaments(jsonData.results)
      })
      .catch( () => console.log("ERORR"))
    console.log(tournaments);
  })

  return (
    <div>
      
    </div>
  );
}

export default MainPage;