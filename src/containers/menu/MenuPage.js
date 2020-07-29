import React, { Component } from 'react';
import MenuTab from './MenuTab';
import MenuCalendar from './MenuCalendar';

// Big Ol' Great-Grandpa container! Immediate Children: MenuTab and MenuCalendar!
class MenuPage extends Component {
    state = {
        currentMenu: this.props.menus[0],
        show: "hidden",
        date: "",
    }

    createNewMenu = () => {
        fetch(`http://localhost:3000/menus`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                menu: { week: this.state.date },
                user_id: this.props.user
            })
        })
    }

    handleChange = (event) => {
        let date = event.target.valueAsDate.toString();
        let day = date[8] + date[9];
        let newDate = date.replace("GMT-0500 (Central Daylight Time)", "").replace("Sun ", "")
            // .replace(` ${(new Date().getHours() - 1).toString() + ":00:00"}`, "")
            .replace(" 19:00:00", "")
            .replace(day, parseInt(day) + 1);
        let altDate = (newDate + `- ${newDate[0] + newDate[1] + newDate[2]} ${parseInt(day) + 7} 2020`).toString();
        this.setState({ date: altDate });
    }

    renderTabs = () => {
        return this.props.menus.map(m => <MenuTab key={m.id} menu={m} handleClick={this.setCurrentMenu} />)
    }

    setCurrentMenu = (menu) => {
        this.setState({ currentMenu: menu })
    }

    toggleNewMenu = () => {
        this.state.show === "hidden" ? this.setState({ show: "visible" }) : this.setState({ show: "hidden" })
    }


    render() {
        const { currentMenu, show } = this.state
        return (
            <div className="menu">
                {this.renderTabs()}
                <button className="new-menu btn" onClick={() => this.toggleNewMenu()} >New Menu</button>
                <form style={{ visibility: show }} onChange={this.handleChange} onSubmit={() => this.createNewMenu()} >
                    <label>Select a week:</label>
                    <input type="week" id="week" name="week" />
                    <button>Create</button>
                </form>
                <MenuCalendar menu={currentMenu} />
            </div>
        );
    }
}

export default MenuPage;
