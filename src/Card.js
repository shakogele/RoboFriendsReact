import React from 'react';

const Card = ( { name, email, username, id } ) => {
  //const { name, email, username, id } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='Shalva Gelenidze' src={`https://robohash.org/${id}?200x200`} />
      <div className="tc">
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
