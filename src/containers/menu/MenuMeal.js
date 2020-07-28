import React from 'react';
import { Link } from 'react-router-dom';

// Baby of the family. Child of MenuDay. Highest parent is MenuPage.

const MenuMeal = (props) => {
    const removeRecipe = (mr) => {
        fetch(`http://localhost:3000/menu_recipes/${mr.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    
    // pass this shit back up to menucalendar

    const renderMeals = () => {
        if (props.recipes.length > 0) {
            return props.recipes.map(r =>
                <div key={r.id} className={r.meal}>
                    <Link to={{ pathname: `/recipes/${r.recipe.ref_id}`, state: { recipe: r.recipe.ref_id } }}>{r.recipe.title}</Link>
                    <button onClick={() => removeRecipe(r)} >-</button>
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
