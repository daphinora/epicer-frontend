import React, { Component } from 'react';
import MenuDay from './MenuDay'

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            user_id: 5,
            menu_id: "",
            menu: []
        }
    }

    renderMenu = () => {
        return this.state.menu_id &&
            this.getMenuRecipes() &&
            this.state.menu.map(m => <MenuDay key={m.id} />)
    }

    render() {
        return (
            <div className="menu">
                {this.renderMenu()}
            </div>
        );
    }

    componentDidMount() {
        this.getMenuID();
    }

    getMenuID = () => {
        fetch(`http://localhost:3000/user_menus?user=${this.state.user_id}`)
            .then(r => r.json())
            .then(r => this.setState({ menu_id: r.pop().menu_id }))
            .catch(err => { console.log(err) })
    }

    getMenuRecipes = () => {
        fetch(`http://localhost:3000/menu_recipes?menu=${this.state.menu_id}`)
            .then(r => r.json())
            .then(r => this.setState({ menu: r }))
            .catch(err => { console.log(err) })
    }

}

export default Menu;
