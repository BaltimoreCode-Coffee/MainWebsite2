// src/components/BlogInfo/BlogInfo.jsx
import React from 'react';
import Card from '../Card/Card';

export default function BlogInfo({ title, tag, desc }) {
    return (
        <Card title={title} tag={tag} desc={desc} />
    );
}