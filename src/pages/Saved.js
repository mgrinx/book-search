import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../components/Grid'
import Spinner from '../components/Spinner';
import Book from '../components/Book';
import API from '../utils/API';
import ErrorMessage from '../components/ErrorMessage';

function Saved() {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        document.title = "Book Search - Saved Books";
        API
            .get('/')
            .then(res => {
                setResults(res.data);
                setLoading(false);
            })
            .catch(err => setError(err.toString()));
    }, []);

    if (error) return <ErrorMessage>{error}</ErrorMessage>;
    if (loading) return <Spinner />;

    return (
        <Container>
            <Row>
                {results.length > 0 ?
                    results.map((v, i) => (
                        <Book
                            key={i}
                            title={v.title}
                            authors={v.authors}
                            description={v.description}
                            image={v.image}
                            link={v.link}
                            savedId={v._id}
                        />
                    ))
                :
                    <Col size='12'>
                        <p className="text-center">No saved books</p>
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default Saved;