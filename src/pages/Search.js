import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '../components/Grid'
import Spinner from '../components/Spinner';
import Book from '../components/Book';
import axios from 'axios';

function Search(props) {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState();

    useEffect(() => {
        if (!props.location.state) {
            setResults([]);
            setLoading(false);
            return;
        }
        let { query } = props.location.state;
        document.title = "Book Search - " + query;
        axios
            .get("https://www.googleapis.com/books/v1/volumes?key=" + process.env.REACT_APP_API_KEY + "&q=" + query)
            .then(res => {
                // console.log(res.data.items);
                setResults(res.data.items);
                setLoading(false);
            });
    }, [props.location.state]);

    if(loading) {
        return (
            <Spinner />
        );
    }

    return (
        <Container>
            <Row>
                {results.length > 0 ?
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