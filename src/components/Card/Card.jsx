import React from 'react';
import './Card.css';

export default function Card({ title, tag, desc }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-tag">{tag}</p>
            <p className="card-desc">{desc}</p>
        </div>
    );
}