import React, { Component } from 'react';
import '../css/Dropdown.css';

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
            weekday: "",
            meal: "",
            menu: "",
            recipe: {},
            rec_id: "",
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value, recipe: this.props.recipe })
    }

    toggleShow = () => {
        console.log("This is where you toggle whether the dropdown is shown for this component :)")
    }

    handleAdd = (menu, weekday, meal, recipe) => {
        console.log(menu, weekday, meal, recipe)
        this.postRecipe(menu, weekday, meal, recipe)
    }

    postRecipe = (menu, weekday, meal, recipe) => {
        fetch(`http://localhost:3000/recipes`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipe: {
                    ref_id: recipe.id,
                    title: recipe.title,
                    cook_time: recipe.readyInMinutes
                },
                menu_id: menu,
                meal: meal,
                weekday: weekday
            })
        })
            .catch(err => { console.log(err) })
    }

    render() {
        const { menu, weekday, meal, recipe } = this.state
        return (
            <div className="dropdown">
                <button className="drpdwn-button" onClick={this.toggleShow}>+</button>
                <div className="drpdwn-options">
                    <select className="drpdwn-menu" onChange={this.handleChange} defaultValue={"default"} name="menu" >
                        <option disabled value="default" hidden>Select Menu</option>
                        {this.props.menus.map(m => <option value={m.id}>{m.week}</option>)}
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
                    <button onClick={() => this.handleAdd(menu, weekday, meal, recipe)} >Submit</button>
                </div>
            </div>
        );
    }
}
export default Dropdown;

