import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../components/Grid'
import Spinner from '../components/Spinner';
import Book from '../components/Book';
import axios from 'axios';

function Search(props) {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState();

    useEffect(() => {
        let search = new URLSearchParams(props.location.search)
        let query = search.get('q');
        if (!query) {
            setLoading(false);
            return;
        }
        document.title = "Book Search - " + query;
        axios
            .get("https://www.googleapis.com/books/v1/volumes?key=" + process.env.REACT_APP_API_KEY + "&q=" + query)
            .then(res => {
                // console.log(res.data.items);
                setResults(res.data.items);
                setLoading(false);
            });
    }, [props.location.search]);

    if (loading) return <Spinner />;

    return (
        <Container>
            <Row>
                {results ?
                    results.map((v, i) => (
                        <Book
                            key={i}
                            title={v.volumeInfo.title}
                            authors={v.volumeInfo.authors}
                            description={v.volumeInfo.description}
                            image={v.volumeInfo.imageLinks ? v.volumeInfo.imageLinks.thumbnail : null}
                            link={v.volumeInfo.canonicalVolumeLink}
                        />
                    ))
                :
                    <Col size='12'>
                        <p className="text-center">Nothing here. Type above to search</p>
                    </Col>
                }
            </Row>
        </Container>
    );
}

export default Search;