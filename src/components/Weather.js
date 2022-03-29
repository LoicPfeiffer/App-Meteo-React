import React from "react";
import "./styles.css";
import { Card } from "semantic-ui-react";

const CardExampleCard = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">{weatherData.city.name}</Card.Header>
      <div>{JSON.stringify(weatherData, undefined, true)}</div>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
