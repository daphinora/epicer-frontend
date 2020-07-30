import React from 'react';
import MenuMeal from './MenuMeal';
import ListGroup from 'react-bootstrap/esm/ListGroup';

const MenuDay = (props) => {

    // Successful child of MenuCalendar. Parent of MenuMeal!

    const renderRecipes = () => {
        let meals = ["Breakfast", "Lunch", "Dinner", "Dessert"]
        if (props.days.length > 0) {
            return meals.map(meal =>
                <div key={meal}>
                    <div style={{ backgroundColor: "grey", paddingLeft: "20.5px" }}>
                        {meal}:
                    </div>
                    <ListGroup.Item style={{ backgroundColor: "white" }}>
                        <MenuMeal key={meal} recipes={props.days.filter(r => r.meal === meal)} removeRecipe={props.removeRecipe} meal={meal} />
                    </ListGroup.Item>
                </div>
            )
        } 
    }

    return (
        <div>
            <ListGroup>
                {props.days.length > 0 && renderRecipes()}
            </ListGroup>
        </div>
    );
}

export default MenuDay;
