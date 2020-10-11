import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function SignUpForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password_digest: password
            })
        })
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("token", data.jwt)
                props.handleLogin(data.user)
                props.history.push("/menu")
            })
        setUsername("")
        setPassword("")
        props.history.push("/menu")
    }

    return (
        <div>
            <Helmet>
                <title>Epicer | Sign In</title>
            </Helmet>
            <Card bg="light" border="light" className="Card">
                <Card.Body>
                    <Card.Title className="Sign-Up-Title">Sign Up</Card.Title>
                    <Card.Text className="Sign-Up-Text">
                        <div>
                            <form className="Submit-Form" onSubmit={(e) => handleSubmit(e)}>
                                <label>Username:</label>
                                <input value={username} onChange={handleUsernameChange} type="text" placeholder="username" />
                                <br />
                                <label className="Submit-Label">Password:</label>
                                <input value={password} onChange={handlePasswordChange} type="password" placeholder="password" />
                                <br />
                                <br />
                                <Button type="submit" className="Submit-Button">Submit</Button>
                            </form>
                        </div>
                    </Card.Text>
                    <br />
                    <div style={{ textAlign: "center" }}>
                        Already have an account?
                    <Button variant="outline-primary" className="Switch-Button" onClick={() => props.handleFormSwitch("login")}>Log In</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignUpForm;