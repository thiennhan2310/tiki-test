import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ArticleItem = ({ id, title, price, thumbnail }) => {
  return (
    <Col md={3}>
      <Card style={{ marginTop: "20px" }}>
        <Card.Img variant="top" src={thumbnail} />
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