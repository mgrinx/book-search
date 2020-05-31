import React, { useState } from 'react';
import { Col } from '../Grid';
import './style.css';
import API from '../../utils/API';

function Book({ title, authors, description, image, link, savedId }) {
    const [saved, setSaved] = useState();

    function saveToDb() {
        setSaved(false);
        API
            .post('/', {
                title: title,
                authors: authors,
                description: description,
                image: image,
                link: link
            })
            .then(function() {
                setSaved(true);
            });
    }

    function deleteFromDb() {
        API
            .delete(savedId)
            .then(function() {
                window.location.reload();
            });
    }

    return (
        <Col size="md-6 lg-4">
            <div className="card mb-4">
                <img src={image || "https://placehold.it/300x300"} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title || "No title"}</h5>
                    <a href={link ? link : "#!"} className="btn btn-primary mr-2 mb-3">View</a>
                    {savedId ?
                        <button onClick={deleteFromDb} className="btn btn-danger mb-3">Delete</button>
                    :
                        <button onClick={saveToDb} className="btn btn-secondary mb-3">Save</button>
                    }
                    {saved === false ?
                        <div class="spinner-border text-primary ml-2" role="status">
                            <span class="sr-only">Saving...</span>
                        </div>
                    : null}
                    {saved ?
                        <div className="alert alert-primary" role="alert">
                            Saved!
                        </div>
                    : null}
                    <p className="card-text text-muted">{authors ? authors.join(", ") : "Unknown author"}</p>
                    <p className="description-text card-text">{description || "No description"}</p>
                </div>
            </div>
        </Col>
    );
}

export default Book;