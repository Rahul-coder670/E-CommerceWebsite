import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import axios from "axios";
import Navbar from "./Navbar";

export const Product = () => {
    let param = useParams();
    let [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${param.pid}`)
            .then(function (response) {
                setProduct(response["data"]);
                 console.log(response["data"])
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [param.pid]);

    return (
        <>  <Navbar />
            <Container>
                <Row>
                    <Col md={2} />
                    <Col md={8} style={{ color: "red" }} className="bg-info">
                        <Card>
                            <Card.Img variant="top" src={product["images"][0] } />
                            <Card.Body>
                                <Card.Title>{product["title"]}</Card.Title>
                                <Card.Text>{product["description"]}</Card.Text>
                                <Row className="justify-content-center">
                                    <Button variant="danger">Rs.{product["price"]}</Button>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} />
                </Row>
            </Container>
        </>
    );
};
