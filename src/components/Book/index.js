import React, { useState } from 'react';
import { Col } from '../Grid';
import './style.css';
import API from '../../utils/API';

function Book({ title, authors, description, image, link, savedId }) {
    const [saved, setSaved] = useState();
    const [deleting, setDeleting] = useState();

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
        setDeleting(true);
        API
            .delete(savedId)
            .then(function() {
                window.location.reload();
            });
    }

    return (
        <Col size="md-6 lg-4">
            <div className="card mb-4">
                <div className="image-wrapper">
                    <img src={image ? image.replace("http://", "https://") : "https://placehold.it/300x300"} alt={title} className="book-img img-fluid mx-auto mb-3 d-block rounded"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-truncate">{title || "No title"}</h5>
                    <p className="card-text text-muted text-truncate">{authors ? authors.join(", ") : "Unknown author"}</p>
                    <a href={link ? link.replace("http://", "https://") : "#"} className="btn btn-primary mr-3 mb-3"><i class="far fa-eye" /> View</a>
                    {savedId ?
                        <button onClick={deleteFromDb} className="btn btn-danger mr-3 mb-3"><i class="far fa-trash-alt" /> Delete</button>
                    :
                        <button onClick={saveToDb} className="btn btn-secondary mr-3 mb-3"><i class="far fa-save" /> Save</button>
                    }
                    {deleting ?
                        <div class="spinner-border text-danger" role="status">
                            <span class="sr-only">Deleting...</span>
                        </div>
                    : null}
                    {saved === false ?
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Saving...</span>
                        </div>
                    : null}
                    {saved ?
                        <i class="fas fa-2x fa-check text-primary"></i>
                    : null}
                    <p className="description-text card-text">{description || "No description"}</p>
                </div>
            </div>
        </Col>
    );
}

export default Book;