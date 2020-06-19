import React from 'react';

interface Props {
  goToMainPage: ()=>void;
}

const TournamentViewPage = (props: Props) => {
  return (
    <div>
      <div>
        <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
      </div>
      Turniej numer: {"?"} !
    </div>
  );
}

export default TournamentViewPage;