import React from 'react';

const RecipeCard = (props) => {
    let {recipe} = props
    return (
        <div className="recipe-card">
            <div className="rcimg">
                <img src={recipe.image} alt={recipe.title} />
            </div>
            {console.log(props)}
        </div>
    );
}

export default RecipeCard;
