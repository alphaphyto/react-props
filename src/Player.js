import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, equipe, nationalite, numeroMaillot, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{equipe}</Card.Subtitle>
                <Card.Text>
                    Nationalité: {nationalite}<br />
                    Numéro de maillot: {numeroMaillot}<br />
                    Age: {age}<br />
                </Card.Text>
                <Card.Img variant="top" src={imageUrl} />
            </Card.Body>
        </Card>
    );
}

export default Player;
