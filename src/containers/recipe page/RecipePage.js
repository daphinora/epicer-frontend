import React, { Component } from 'react';

// css
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/RecipePage.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

// components
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
            this.state.recipe.extendedIngredients.map(i => <ListGroup.Item>{i.original}</ListGroup.Item>)
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
                        {title} | Ready In: {readyInMinutes} Minutes
                    </div>

                    {/* dropdown */}
                    <div className="rec-drp">
                        <Dropdown menus={this.props.menus} recipe={this.state.recipe} />
                    </div>

                    <CardColumns className="columns">
                        <Card className="hiddenasf">
                            <Card.Body>
                                this isn't a real card :)
                            </Card.Body>
                        </Card>

                        {/* image */}
                        <Card className="rec-image">
                            <Card.Img src={image} className="rec-image" />
                        </Card>

                        {/* ingredients */}
                        <Card className="card">
                            <Card.Body>
                                <Card.Title style={{ color: "black", textAlign: "center" }}>
                                    Ingredients:
                                </Card.Title>
                                <Card.Text>
                                    <ListGroup variant="flush" style={{ color: 'rgb(71, 71, 71)' }}>
                                        {this.showIngredients()}
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* instructions */}
                        <Card className="card">
                            <Card.Body>
                                <Card.Title style={{ color: "black", textAlign: "center" }}>
                                    Instructions:
                                </Card.Title>
                                <Card.Text>
                                    <ListGroup variant="flush" style={{ color: 'rgb(71, 71, 71)' }}>
                                        {this.showInstructions()}
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>
            </div >
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
