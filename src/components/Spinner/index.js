import React from 'react';
import { Container, Row, Col } from '../Grid';

function Spinner() {
    return (
        <Container>
            <Row>
                <Col size="12 text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Spinner;