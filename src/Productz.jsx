import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap"
import axios from "axios";
import Navbar from "./Navbar";

export const Productz = () => {
    let [products, setProducts] = useState([]);
    let [categories, setcategories] = useState([]);
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(function (response) {
                setProducts(response["data"]["products"]);
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/categories")
            .then(function (response) {
                // setProducts(response["data"]["products"]); ;
                setcategories(response["data"])
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const changeCategory = (e) => {
        let category = e.target.value;

        if (category != 0) {
            axios
                .get(`https://dummyjson.com/products/category/${category}`)
                .then(function (response) {
                    setProducts(response["data"]["products"]);
                    // console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            axios
                .get("https://dummyjson.com/products")
                .then(function (response) {
                    setProducts(response["data"]["products"]);
                    //console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    const searchProduct = (e) => {
        let query = e.target.value;
        axios
            .get(`https://dummyjson.com/products/search?q=${query}`)
            .then(function (response) {
                setProducts(response["data"]["products"]);
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <>
            <Navbar />
            <Container>
                <Form.Group className="mb-3">
                    <Form.Label> Search Product</Form.Label>
                    <Form.Control type="text" onChange={searchProduct} />
                </Form.Group>
            </Container>
            <Container>
                <Form.Group className="mb-3">
                    <Form.Label> Disabled select menu</Form.Label>
                    <Form.Select onChange={changeCategory}>
                        <option value="0">---Select Category---</option>
                        {categories.map((val, index) => {
                            return (
                                <option value={val} key={index}>
                                    {val}
                                </option >
                            );
                        })}
                    </Form.Select >
                </Form.Group >
            </Container >
            <Container>
                <Row>
                    {products.map((data, index) => {
                        return (
                            <Col md={4} key={index}>
                                <Card style={{ height: "400px" }}>
                                    <Card.Img
                                        style={{ height: "150px" }}
                                        variant="top"
                                        src={data["images"][0]}
                                    />
                                    <Card.Body
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignContent: "space-between",
                                            justifyContent: "space-between",

                                        }}
                                    >
                                        <Card.Title> {data["title"]}</Card.Title>
                                        <Card.Text style={{ height: "100px", overflow: "hidden" }}>
                                            {data["description"]}
                                        </Card.Text>
                                        <div className="justify-content-center d-flex justify-content-between">
                                            <Button variant="danger">Rs.{data["price"]}</Button>
                                            <Link to={`/product/${data.id}`}>
                                                <Button variant="primary">Go somewhere</Button>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row >
            </Container >
        </>
    );
};
