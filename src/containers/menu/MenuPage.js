import React, { Component } from 'react';
import MenuCalendar from './MenuCalendar';
import {Helmet} from "react-helmet"; 

// css
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/MenuCalendar.css';


// Big Ol' Great-Grandpa container! Immediate Child: MenuCalendar!
class MenuPage extends Component {
    state = {
        currentMenu: this.props.menus[0],
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
            .replace(" 19:00:00", "")
            .replace(day, parseInt(day) + 1);
        let altDate = (newDate + `- ${newDate[0] + newDate[1] + newDate[2]} ${parseInt(day) + 7} 2020`).toString();
        this.setState({ date: altDate });
    }

    // cheap way of making sure the entire picture renders whether items are on the menu or not
    menuCheck = () => {
        if (!this.state.currentMenu) {
            return <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        }
    }

    render() {
        return (
            <div className="MenuPage">
                <Helmet>
                    <title>Epicer | Weekly Menus</title>
                </Helmet>
                <div className="new-menu" style={{ backgroundColor: "white" }}>
                    <div style={{ marginLeft: "600px", fontSize: "80px", maxHeight: "50%", fontFamily: "Penna", marginTop: "-1%" }}>
                        Weekly Menus
                    </div>
                    <form style={{ fontSize: "17px", }} className="new-form" onChange={this.handleChange} onSubmit={() => this.createNewMenu()} >
                        <label>Creating a new menu? Select a week:</label>
                        <input type="week" id="week" name="week" />
                        <Button type="submit" style={{ fontSize: "15px" }}>Create</Button>
                    </form>
                    <br />
                </div>
                <Tabs defaultActiveKey={this.props.menus.first} style={{ backgroundColor: "white" }}>
                    {this.props.menus.map(m => <Tab key={m.id} style={{ color: "white" }} eventKey={m.id} title={m.week.replace(/2020/g, "")}><MenuCalendar key={m.id} menu={m} /></Tab>)}
                </Tabs>
                <br />
                <br />
                <br />
                {this.menuCheck()}
            </div>
        );
    }
}

export default MenuPage;
