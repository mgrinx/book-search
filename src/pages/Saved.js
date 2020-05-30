import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../components/Grid'
import Spinner from '../components/Spinner';
import Book from '../components/Book';
import API from '../utils/API';

function Saved(props) {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState();

    useEffect(() => {
        document.title = "Book Search - Saved Books";
        API
            .get("/")
            .then(res => {
                console.log(res.data);
                setResults(res.data);
                setLoading(false);
            });
    }, []);

    return (
        loading ?
        <Spinner />
        :
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