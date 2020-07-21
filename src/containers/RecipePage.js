import React from 'react';
import Ingredient from './Ingredient'
import Instruction from './Instruction'
import { Link } from 'react-router-dom'

const RecipePage = (props) => {
    const { title, image, readyInMinutes, extendedIngredients, analyzedInstructions } = props.location.state.recipe

    const showIngredients = () => {
        return extendedIngredients.map(i => <Ingredient key={i.id} ingredient={i} />)
    }

    const showInstructions = () => {
        return analyzedInstructions[0].steps.map(i => <Instruction key={i.id} step={i}/>)
    }

    return (
        <div>
            <h2>{title} | Ready In: {readyInMinutes} Minutes</h2>
            <img src={image} alt={title}/>
            <div>
                Ingredients: <br/>
                <ul>
                {showIngredients()}
                </ul>
            </div>
                Instructions:
            <ol className="instructions">
                {showInstructions()}
            </ol>
            <Link to={"/"}>Back</Link>
        </div>
    );
}

export default RecipePage;
