import React from 'react';

const RecipeCard = (props) => {
    return (
        <div className="recipe-card">
            <div className="rcimg">
                {props.recipe.image}
            </div>
            {console.log(props)}
        </div>
    );
}

export default RecipeCard;
