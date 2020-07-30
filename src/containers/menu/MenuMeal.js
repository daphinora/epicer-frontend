import React from 'react';
import { Link } from 'react-router-dom';

// css
import '../css/MenuCalendar.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

// Baby of the family. Child of MenuDay. Highest parent is MenuPage.

const MenuMeal = (props) => {
    const renderMeals = () => {
        if (props.recipes.length > 0) {
            return props.recipes.map(r =>
                <ListGroup.Item>
                    <div key={r.id} className="menu-meal">
                        <Link to={{ pathname: `/recipes/${r.recipe.ref_id}`, state: { recipe: r.recipe.ref_id } }}>{r.recipe.title}</Link>
                        <div>
                            {r.recipe.cook_time} min
                        </div>
                        <Button className="Delete-Btn" onClick={() => props.removeRecipe(r)} > remove </Button>
                    </div>
                </ListGroup.Item>
            )
        } else { return <Link to="/recipes" key={props.meal} style={{ color: "grey" }}>Find recipes!</Link> }
    }

    return (
        <div>
            <ListGroup variant="flush">
                {renderMeals()}
            </ListGroup>
        </div>
    );
}

export default MenuMeal;
