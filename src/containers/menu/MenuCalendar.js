import React, { Component } from 'react';
import MenuDay from './MenuDay';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// The successful child of MenuPage. Parent of MenuDay!

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
                <Col className="column" key={day}>
                    <div key={day} >
                        <div className="weekday">
                            {day}
                        </div>
                        <MenuDay key={day} days={this.state.menuRecipes.filter(mr => mr.weekday === day)} removeRecipe={this.removeRecipe} />
                        <br />
                    </div>
                </Col>
            )
    }

    removeRecipe = (mr) => {
        fetch(`http://localhost:3000/menu_recipes/${mr.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        this.setState({ menuRecipes: this.state.menuRecipes.filter(m => m.id !== mr.id) })
    }

    render() {
        return (
            <Container className="Menu-Calendar">
                <Row lg="7" >
                    {this.getMenuDays()}
                </Row>
            </Container>
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
