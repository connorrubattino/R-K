import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Gallery from "./views/Gallery";
import About from "./views/About";



export default function App() {

    return (
        <>
            <Navigation />
            <Container>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </Container>
        </>
    )
}