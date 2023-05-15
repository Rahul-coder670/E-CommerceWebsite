import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Products = () => {
    let [products, setProducts] = useState([]);
    useEffect(() => {

        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                // handle success
                setProducts(response["data"]["products"]);
                console.log("products are", products);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (<>
        <div>Products Component</div>
        <table border='1'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((data, index) => {
                    return <tr><td>{data["id"]}</td><td>{data["title"]}</td> <td>{data["description"]}</td><td>{data["price"]}</td></tr>
                })}
            </tbody>
        </table>
    </>
    );
};