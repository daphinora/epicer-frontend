import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class RecipeCard extends Component {
    render() {
        let { recipe } = this.props
        return (
            <div className="recipe-card">
                <br />
                <br />
                <div className="rcimg">
                    <img src={recipe.image} alt={recipe.image} />
                </div>
                <div className="rcinfo">
                    {recipe.title} <br />
                    {recipe.readyInMinutes} Minutes <br />
                    <Link to={{pathname: `/recipes/${recipe.id}`, state: {recipe: recipe} }}>Details</Link>
                </div>
            </div>
        );
    }
}

export default RecipeCard;