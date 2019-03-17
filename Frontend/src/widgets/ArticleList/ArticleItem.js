import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArticleImage from '../../components/ArticleImage'
const ArticleItem = ({ id, title, price, image }) => {
  return (
    <Col md={3}>
      <Card style={{ marginTop: "20px" }}>
        <ArticleImage name={image} />
        <Card.Body style={{ maxHeight: "130px", overflow: "hidden" }}>
          <Card.Title>
            <Link to={`/article/${id}`}>{title}</Link>
          </Card.Title>
          <Card.Text>
            {price} VND
          </Card.Text>

        </Card.Body>
      </Card>
    </Col>
  )
}
export default ArticleItem;