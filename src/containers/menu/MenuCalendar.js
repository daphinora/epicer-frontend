import React, { Component } from 'react';
import MenuDay from './MenuDay';

// The successful child of MenuPage. Sibling to MenuTab. Parent of MenuDay!

class MenuCalendar extends Component {
    state = {
        menuRecipes: [],
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }

    getMenuRecipes = () => {
        return this.props.menu &&
            fetch(`http://localhost:3000/menu_recipes?menu=${this.props.menu.id}`)
                .then(r => r.json())
                .then(menuRecipes => this.setState({ menuRecipes }))
    }

    getMenuDays = () => {
        return this.state.menuRecipes &&
            this.state.days.map(day =>
                <div key={day} >
                    {day}
                    <MenuDay key={day} recipes={this.state.menuRecipes.filter(mr => mr.weekday === day)} />
                    <br />
                </div>
            )
    }

    render() {
        return (
            <div className="menu-calendar">
                {this.getMenuDays()}
            </div >
        );
    }

    componentDidUpdate(prevProps) {
        if (prevProps.menu !== this.props.menu) {
            this.getMenuRecipes()
        }
    }

    componentDidMount() {
        this.getMenuRecipes()
    }
}

export default MenuCalendar;
