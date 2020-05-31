import React from 'react'
import { Container, Row, Col } from '../Grid'

function ErrorMessage({ children }) {
    return (
        <Container>
            <Row>
                <Col size='12'>
                    <p className='text-center text-danger'><em>{children}</em></p>
                </Col>
            </Row>
        </Container>
    );
}

export default ErrorMessage