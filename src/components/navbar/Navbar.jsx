import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './Navbar.css';
import FaturamentoMensal from '../../pages/FaturamentoMensal';
import FibonacciChecker from '../../pages/FibonacciChecker';
import InverterString from '../../pages/InverterString';
import FaturamentoEstados from '../../pages/FaturamentoEstados';
import Home from '../../pages/Home';

const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/FibonacciChecker">Exercício 2</Link>
                    </li>
                    <li>
                        <Link to="/FaturamentoMensal">Exercício 3</Link>
                    </li>
                    <li>
                        <Link to="/FaturamentoEstados">Exercício 4</Link>
                    </li>
                    <li>
                        <Link to="/InverterString">Exercício 5</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/FibonacciChecker" element={<FibonacciChecker />} />
                <Route path="/FaturamentoMensal" element={<FaturamentoMensal />} />
                <Route path="/FaturamentoEstados" element={<FaturamentoEstados />} />
                <Route path="/InverterString" element={<InverterString />} />
            </Routes>
        </Router>
    );
};

export default Navbar;
