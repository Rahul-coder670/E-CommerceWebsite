import { Routes, Route, Link } from "react-router-dom"
import About from "./About";
import Contact from "./Contact"; 
import { Productz } from "./Productz";
import Home from "./Home"; 
import { Product } from "./Product";
import {Register} from "./Register";
import {Login} from "./Login";
import {NotFound } from "./NotFound";

function App() {
return (
<div className="App">
<Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} /> 
<Route path="contact" element={<Contact />} />
<Route path="register" element={<Register />} />
<Route path="login" element={<Login />} />
<Route path="productz" element={<Productz />} />
<Route path="product" element={<Product />} />
 <Route path="product/:pid" element={<Product />} />
<Route path="*" element={<NotFound/>} />
</Routes>
</div>
);
}

export default App;
