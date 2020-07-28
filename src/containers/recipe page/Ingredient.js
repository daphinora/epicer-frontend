import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const Ingredient = ({ ingredient }) => {
    return (
        <ListGroup.Item>
            {ingredient}
        </ListGroup.Item>
    );
}

export default Ingredient;
