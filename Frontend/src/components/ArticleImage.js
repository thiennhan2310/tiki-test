import React from 'react';
import { Card } from 'react-bootstrap';
import { IMAGE_HOST } from '../config/index'

const ArticleImage = ({ name }) => <Card.Img variant="top" src={`${IMAGE_HOST}/images/${name}`} />

export default ArticleImage
