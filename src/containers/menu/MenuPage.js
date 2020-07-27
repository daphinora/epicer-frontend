import React, { Component } from 'react';
import MenuTab from './MenuTab';

class MenuPage extends Component {
    constructor() {
        super();
        this.state = {
            currentMenu: {},
        }
    }

    renderTabs = () => {
        return this.props.menus.map(m => <MenuTab key={m.id} menu={m} handleClick={this.setCurrentMenu} />)
    }

    setCurrentMenu = (menu) => {
        this.setState({currentMenu: menu})
    }

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
                {this.renderTabs()}
            </div>
        );
    }
}

export default MenuPage;
