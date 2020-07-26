import React, { Component } from 'react';
import '../css/Dropdown.css';

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            weekday: "",
            meal: "",
            menu: "",
            recipe: [],
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, recipe: this.props.recipe })
    }

    toggleShow = () => {
        console.log("This is where you use css to toggle whether the dropdown is shown for this component :)")
    }

    render() {
        const { weekday, meal, recipe } = this.state
        return (
            <div className="dropdown">
                <button className="drpdwn-button" onClick={this.toggleShow}>+</button>
                <div className="drpdwn-options">
                    <select className="drpdwn-menu" defaultValue={"default"}>
                        <option disabled value="default" hidden>Select Menu</option>
                        <option value="" name="this week">Jul4 - Jul12</option>
                        <option value="" name="next week">Next Week</option>
                    </select>
                    <select className="drpdwn-weekday" onChange={this.handleChange} name="weekday" defaultValue={"default"} >
                        <option disabled value="default" hidden>Select Day</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>
                    <select className="drpdwn-meal" onChange={this.handleChange} name="meal" defaultValue={"default"}>
                        <option disabled value="default" hidden>Select Meal</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                    <button onClick={() => this.props.handleAdd(weekday, meal, recipe)} >Submit</button>
                </div>
            </div>
        );
    }
}
export default Dropdown;

