import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
class RecipeCard extends Component {
    render() {
        let { image, title, id, readyInMinutes } = this.props.recipe
        return (
            <div className="recipe-card">
                <br />
                <br />
                <div className="rcimg">
                    <img src={image} alt={image} />
                </div>
                <div className="rcinfo">
                    {title} <br />
                    {readyInMinutes} Minutes <br />
                    <Dropdown recipe={this.props.recipe} menus={this.props.menus} />
                    <Link to={{ pathname: `/recipes/${id}`, state: { recipe: id } }}>Details</Link>
                </div>
            </div>
        );
    }
}

export default RecipeCard;