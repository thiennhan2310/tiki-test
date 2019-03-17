import React from 'react';
import { connect } from 'react-redux';
import { Alert, Row, Form, Button, Col } from 'react-bootstrap';
import { setToken } from '../../actions/auth';
import { apiPost } from '../../helpers/api';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', price: '', error: '' };
    this.inputTitle = this.inputTitle.bind(this);
    this.inputPrice = this.inputPrice.bind(this);
    this.submit = this.submit.bind(this);
  }

  inputTitle(title) {
    this.setState({ title });
  }
  inputPrice(price) {
    this.setState({ price });
  }

  submit() {
    this.props.onSubmit(this.state.title, this.state.price)
  }
  render() {
    return (
      <Row>
        <Col md={{ span: 3, offset: 4 }} >
          <Form>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" onChange={(e) => this.inputTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Password" onChange={(e) => this.inputPrice(e.target.value)} />
            </Form.Group>
            <Alert variant="danger" hidden={(!this.state.error)}>
              {this.state.error}
            </Alert>

            <Button variant="primary" type="button" onClick={this.submit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default ArticleForm;