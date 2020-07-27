import React from 'react';

const MenuMeal = (props) => {

    const renderMeals = () => {
        if (props.recipes.length > 0) {
           return props.recipes.map(r => 
            <div className={r.meal}>
                {r.recipe.title}
            </div>
            )
        }
    }

    return (
        <div>
            {renderMeals()}
        </div>
    );
}

export default MenuMeal;
