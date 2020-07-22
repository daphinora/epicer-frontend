import React, { Component } from 'react';
import MenuDay from './MenuDay'

class Menu extends Component {

    renderMenu = () => {
        // this.props.menu.map(day => <MenuDay key={day.id} day={day} />)
       return  "Heyyyyyyyyyy this my menu"
    }

    render() {
        return (
            <div className="menu">
                {this.renderMenu()}
            </div>
        );
    }
}

export default Menu;
