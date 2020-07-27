import React from 'react';

const Ingredient = ({ ingredient }) => {
    // const { original } = ingredient

    return (
        <li className="ingredient">
            {ingredient}
        </li>
    );
}

export default Ingredient;
