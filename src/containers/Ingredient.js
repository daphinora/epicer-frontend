import React from 'react';

const Ingredient = ({ ingredient }) => {
    const { original } = ingredient

    return (
        <li className="ingredient">
            {original}
        </li>
    );
}

export default Ingredient;
