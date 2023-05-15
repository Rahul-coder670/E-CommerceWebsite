import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export const Login = () => {
    let navigate = useNavigate();
    let users = localStorage.getItem("user");
    if (users != null) {
        navigate("/profile");
    }
    let [user, setUser] = useState("");
    let [pass, setPass] = useState("");
   
    const submitForm = (e) => {
        e.preventDefault();
        console.log(user, pass);
        axios
            .post("https://dummyjson.com/auth/login", {
                username: user,
                password: pass,
            })
            .then(function (response) {
                localStorage.setItem("user", response.data.id);
                console.log(response);
                navigate("/profile");
            })
            .catch(function (error) {
                console.log("user not login", error);
            });
    };
    return (
        <Container>
            <Navbar />
            <Form>
            <Form.Group
                    className="mb-3"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    controlId="formBasicUsername"
                >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
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