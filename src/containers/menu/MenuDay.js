import React from 'react';
import MenuMeal from './MenuMeal';

const MenuDay = (props) => {

    const renderRecipes = () => {
        let meals = ["Breakfast", "Lunch", "Dinner", "Dessert"]
        if (props.recipes.length > 0) {
            return meals.map(meal =>
                <div className={meal}>
                    {meal}:
                    <MenuMeal key={meal} recipes={props.recipes.filter(r => r.meal === meal)} />
                </div>
            )
        }
    }

    return (
        <div>
            {props.recipes.length > 0 && renderRecipes()}
        </div>
    );
}

export default MenuDay;
