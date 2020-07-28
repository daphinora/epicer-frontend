import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const Instruction = ({step}) => {
    return (
        <ListGroup.Item as="li">
            {step.step}
        </ListGroup.Item>
    );
}

export default Instruction;
