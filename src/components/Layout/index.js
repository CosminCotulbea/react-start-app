import Footer from "./Footer";
import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Sidebar from './Sidebar'

const Layout = ({ children, header = true, footer = true }) => {
    return (
        <Container fluid>
            <Sidebar />
            {header && <Header />}
            <div className="page-layout">
                {children}
            </div>
            {footer && <Footer />}
        </Container>
    );
};

export default Layout;
