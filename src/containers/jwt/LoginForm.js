import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';

function LoginForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                props.handleLogin(data.user)
            })
        setUsername("")
        setPassword("")
        props.history.push("/menu")
    }

    return (
        <div>
            <Helmet>
                <title>Epicer | Log In</title>
            </Helmet>
            <Card bg="light" border="light" style={{ padding: '4vh', marginLeft: "-30px" }}>
                <Card.Body>
                    <Card.Title className="Sign-Up-Title" style={{ fontSize: "25px" }}>Log In</Card.Title>
                    <Card.Text className="Sign-Up-Title">
                        <div>
                            <form onSubmit={(e) => handleSubmit(e)} style={{ paddingBottom: "10px" }}>
                                <label>Username:</label>
                                <input value={username} onChange={handleUsernameChange} type="text" placeholder="username" />
                                <br />
                                <label style={{ paddingRight: "10px" }}>Password:</label>
                                <input value={password} onChange={handlePasswordChange} type="password" placeholder="password" />
                                <br />
                                <br />
                                <Button type="submit" className="Submit-Button">Submit</Button>
                            </form>
                        </div>
                    </Card.Text>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        Don't have an account?
                    <Button variant="outline-primary" className="Other-Button" onClick={() => props.handleFormSwitch("signUp")}>Sign Up</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LoginForm
