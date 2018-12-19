import React from 'react';
import Card from './Card';

const CardList = (props) => {

  const cards = props.robots.map((robot) => {
    return (
      <Card
        id={robot.id}
        key={robot.id}
        name={robot.name}
        username={robot.username}
        email={robot.email} />
    )
  });

  return (
    <div>
      {cards}
    </div>
  );
};

export default CardList;
