import React, { Component } from 'react';
import MenuTab from './MenuTab';
import MenuCalendar from './MenuCalendar';

// Big Ol' Great-Grandpa container! Immediate Children: MenuTab and MenuCalendar!
class MenuPage extends Component {
    state = {
        currentMenu: this.props.menus[0]
    }

    renderTabs = () => {
        return this.props.menus.map(m => <MenuTab key={m.id} menu={m} handleClick={this.setCurrentMenu} />)
    }

    setCurrentMenu = (menu) => {
        this.setState({ currentMenu: menu })
    }

    render() {
        const { currentMenu } = this.state
        return (
            <div className="menu">
                {this.renderTabs()}
                <button className="new-menu btn">New Menu</button>
                <MenuCalendar menu={currentMenu} />
            </div>
        );
    }
}

export default MenuPage;
