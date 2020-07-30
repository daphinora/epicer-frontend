import React, { Component } from 'react';

// css
import ListGroup from 'react-bootstrap/ListGroup'
import '../css/RecipePage.css'

// components
import Ingredient from './Ingredient';
import Instruction from './Instruction';
import Dropdown from '../Dropdown';
class RecipePage extends Component {
    constructor() {
        super();
        this.state = {
            recipe: {}
        }
    }

    showIngredients = () => {
        return this.state.recipe.extendedIngredients &&
            this.state.recipe.extendedIngredients.map(i => <Ingredient key={i.id} ingredient={i.original} />)
    }

    showInstructions = () => {
        return this.state.recipe.analyzedInstructions &&
            this.state.recipe.analyzedInstructions[0].steps.map(i => <Instruction key={i.number} step={i} />)
    }


    render() {
        const { title, image, readyInMinutes } = this.state.recipe

        return (
            <div className="recipe-page">
                <div className="header-and-image">
                    <div className="header">
                        {/* title */}
                        {/* <h2> */}
                        {title} | Ready In: {readyInMinutes} Minutes
                        {/* </h2> */}
                    </div>

                    {/* dropdown */}
                    <div className="rec-drp">
                        <Dropdown menus={this.props.menus} recipe={this.state.recipe} />
                    </div>

                    {/* image */}
                    <img src={image} alt={title} className="rec-image" />
                </div>

                <div className="ing-inst">
                    {/* ingredients */}
                    <div className="ingredients">
                        <ListGroup as="ul">
                            <ListGroup.Item style={{ backgroundColor: "lightgrey" }}>
                                Ingredients:
                            </ListGroup.Item>
                            {this.showIngredients()}
                        </ListGroup>
                    </div>

                    {/* instructions */}
                    <div className="instructions">
                        <ListGroup as="ol">
                            <ListGroup.Item style={{ backgroundColor: "lightgrey" }}>
                                Instructions:
                            </ListGroup.Item>
                            {this.showInstructions()}
                        </ListGroup>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }

    componentDidMount() {
        this.getRecipe();
    }

    getRecipe = () => {
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${this.props.location.state.recipe}/information`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
            }
        })
            .then(r => r.json())
            .then(response => this.setState({ recipe: response }))
            .catch(err => {
                console.log(err);
            });
    }
}

export default RecipePage;
