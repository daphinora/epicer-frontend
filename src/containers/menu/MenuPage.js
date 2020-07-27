import React, { Component } from 'react';
import MenuTab from './MenuTab';
import MenuCalendar from './MenuCalendar';

class MenuPage extends Component {
    state = {
        currentMenu: this.props.menus[0]
    }

    renderTabs = () => {
        return this.props.menus.map(m => <MenuTab key={m.id} menu={m} handleClick={this.setCurrentMenu} />)
    }

    setCurrentMenu = (menu) => {
        this.setState({currentMenu: menu})
    }

    render() {
        const {currentMenu} = this.state
        return (
            <div className="menu">
                <button className="new-menu btn">New Menu</button>
                {this.renderTabs()}
                <MenuCalendar menu={currentMenu} />
            </div>
        );
    }
}

export default MenuPage;
