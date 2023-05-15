import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const Profile = () => {
    let [data, setData] = useState({});
    let navigate = useNavigate();
    useEffect(() => {
        let user = localstorage.getItem("user");
        if (user == null) {
            navigate("/login");
        }
        axios
            .get(`https://dummyjson.com/users/${user}`)
            .then(function (response) {
                setData(response.data);
                console.log(response);
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const Logout = () => {

        localstorage.removeItem("user");
        navigate("/login");

    };
    return (
        <>
        {data}
        <Button onClick={Logout}>Logout</Button>
        </>
    );
};