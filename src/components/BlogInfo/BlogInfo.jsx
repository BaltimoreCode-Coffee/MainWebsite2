// src/components/BlogInfo/BlogInfo.jsx

import Card from '../Card/Card';

export default function BlogInfo({ title, tag, desc }) {
    return (
        <Card title={title} tag={tag} desc={desc} />
    );
}