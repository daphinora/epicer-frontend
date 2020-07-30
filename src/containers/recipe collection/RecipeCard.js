import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
import Card from 'react-bootstrap/Card';
import '../css/RecipeCollection.css'
class RecipeCard extends Component {
    render() {
        let { title, id, readyInMinutes } = this.props.recipe
        return (
            <div>
                <Card style={{ width: '18rem' }}  className="recipe-card">
                    <Card.Img variant="top" src={this.props.image} alt={this.props.image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {readyInMinutes} Minutes
                        </Card.Text>
                        <Link to={{ pathname: `/recipes/${id}`, state: { recipe: id } }}>Details</Link>
                    </Card.Body>
                </Card>
                <Dropdown recipe={this.props.recipe} menus={this.props.menus} />
            </div>
        );
    }
}

export default RecipeCard;