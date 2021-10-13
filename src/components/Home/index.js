import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Layout from "../Layout";


const Home = () => {

    return (
        <Layout className="custom-class">
            <Container>
                <Row>
                    <Col xl={12} className="text-center pt-5">
                        Home
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Home;
