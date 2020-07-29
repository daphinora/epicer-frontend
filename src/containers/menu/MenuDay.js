import React from 'react';
import MenuMeal from './MenuMeal';

const MenuDay = (props) => {

    // Successful child of MenuCalendar. Parent of MenuMeal!

    const renderRecipes = () => {
        let meals = ["Breakfast", "Lunch", "Dinner", "Dessert"]
        if (props.days.length > 0) {
            return meals.map(meal =>
                <div key={meal} className={meal}>
                    {meal}:
                    <MenuMeal key={meal} recipes={props.days.filter(r => r.meal === meal)} removeRecipe={props.removeRecipe}/>
                </div>
            )
        }
    }

    return (
        <div>
            {props.days.length > 0 && renderRecipes()}
        </div>
    );
}

export default MenuDay;
