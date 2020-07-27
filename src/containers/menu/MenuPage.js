import React, { Component } from 'react';
import MenuDay from './MenuDay'

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menu_id: "",
            menu: []
        }
    }

    // renderMenu = () => {
    //     return this.state.menu_id &&
    //         this.getMenuRecipes() &&
    //         this.state.menu.map(m => <MenuDay key={m.id} />)
    // }

    render() {
        return (
            <div className="menu">
                {/* LATEST: need to set up this page: we need a new menu button including calendar functionality
                and a place to put our menu days. ideas: outline our menu with monday, tuesday, etc and just
                pass down each day's recipes to the menudays. then, map out our menuday component and what
                that might look like. finally, for each section maybe filter the day's recipes to find our
                one recipe pertaining to that meal
                /// {this.props.recipes.filter(r => r.meal === "breakfast").first.recipe.title} ///
                (checked!!! $ MenuRecipe.all.filter {|r| r.meal === "breakfast"}.first.recipe.title #=> "Recipe One")
                and give the title of that recipe as well as make each of the recipes a link you can click on
                that will redirect you to the recipepage corresponding to that recipe. yeah. you got this!!! */}
                {/* {this.renderMenu()} */}
            </div>
        );
    }

    // componentDidMount() {
    //     this.getMenuID();
    // }

    // getMenuID = () => {
    //     fetch(`http://localhost:3000/user_menus?user=${this.state.user_id}`)
    //         .then(r => r.json())
    //         .then(r => this.setState({ menu_id: r.pop().menu_id }))
    //         .catch(err => { console.log(err) })
    // }

    // getMenuRecipes = () => {
    //     fetch(`http://localhost:3000/menu_recipes?menu=${this.state.menu_id}`)
    //         .then(r => r.json())
    //         .then(r => this.setState({ menu: r }))
    //         .catch(err => { console.log(err) })
    // }

}

export default Menu;
