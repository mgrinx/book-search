import React, { useState } from 'react';
import { Col } from '../Grid';
import API from '../../utils/API';
import './style.css';

function Book(props) {
    let { title, authors, description, image, link, savedId } = props;

    const [saved, setSaved] = useState(false);
    const [saving, setSaving] = useState(false);

    function saveToDb() {
        setSaving(true);
        API
            .post("/", {
                title: title,
                authors: authors,
                description: description,
                image: image,
                link: link
            })
            .then(function() {
                setSaving(false);
                setSaved(true);
            });
    }

    function deleteFromDb() {
        API
            .delete("/" + savedId)
            .then(function() {
                window.location.reload();
            });
    }

    return (
        <Col size="sm-6 col-md-4 col-lg-3">
            <div className="card my-3">
                <img src={image ? image : "https://placehold.it/250x200"} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title.length > 40 ? title.slice(0, 40) + "..." : title}</h5>
                    <a href={link ? link : "#!"} className="btn btn-primary mr-2 mb-3">View</a>
                    {savedId ?
                        <button onClick={deleteFromDb} className="btn btn-danger mb-3">Delete</button>
                    :
                        <button onClick={saveToDb} className="btn btn-secondary mb-3">Save</button>
                    }
                    {saving ?
                        <div class="spinner-border text-primary ml-2" role="status">
                            <span class="sr-only">Saving...</span>
                        </div>
                    : null}
                    {saved ?
                        <div className="alert alert-primary" role="alert">
                            Saved!
                        </div>
                    : null}
                    <p className="card-text text-muted">{authors ? authors.join(", ") : ""}</p>
                    <p className="card-text">{description ? description.slice(0, 100) + "..." : "No description"}</p>
                </div>
            </div>
        </Col>
    );
}

export default Book;