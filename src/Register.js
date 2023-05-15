import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"


export const Register = () => {
    let navigate = useNavigate();
    let users = localStorage.getItem("user");
    if (users != null) {
        navigate("/profile");
    }
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [user, setUser] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log(fname, lname, user, email, pass);

        axios
            .post("https://dummyjson.com/users/add", {
                firstName: fname,
                lastName: lname,
                username: user,
                email: email,
                password: pass,
            })
            .then(function (response) {
                console.log("success ", response);
            })
            .catch(function (error) {
                console.log("failure", error);
            });
    };

    return (
        <Container>
            <Navbar />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                        placeholder="Enter First Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        placeholder="Enter Last Name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    controlId="formBasicPassword"
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onclick={submitForm}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
};