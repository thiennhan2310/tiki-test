import React from 'react';
import { connect } from 'react-redux';
import { Alert, Row, Form, Button, Col } from 'react-bootstrap';
import { setToken } from '../../actions/auth';
import { apiPost } from '../../helpers/api';
import ArticleImage from '../../components/ArticleImage';
const MAXIMUM_IMAGES = 3;

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    const { title, price, images: currentImages } = this.props.data || {};
    this.state = {
      title: title || '',
      price: price || '',
      images: [],
      currentImages: currentImages || [],
      error: '',
      isEdit: !!title
    };
    this.inputTitle = this.inputTitle.bind(this);
    this.inputPrice = this.inputPrice.bind(this);
    this.inputImage = this.inputImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputTitle(title) {
    this.setState({ title });
  }
  inputPrice(price) {
    this.setState({ price });
  }

  inputImage = (position, file) => {
    const images = this.state.images;
    images[position] = { file, position }
    this.setState({
      images: [...images]
    })
  }


  handleSubmit(event) {
    const form = event.currentTarget;
    console.log(form.checkValidity());
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      this.setState({ error: "There is error" })
      return
    }

    this.props.onSubmit(this.state.title, this.state.price, this.state.images)

  }

  render() {
    return (
      <Row>
        <Col md={{ span: 3, offset: 4 }} >
          <Form
            noValidate
            validated={!!this.state.error}
            onSubmit={this.handleSubmit}
          >
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" defaultValue={this.state.title} required placeholder="Title" onChange={(e) => this.inputTitle(e.target.value)} />
              <Form.Control.Feedback type="invalid">
                Title is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price" required defaultValue={this.state.price} onChange={(e) => this.inputPrice(e.target.value)} />
              <Form.Control.Feedback type="invalid">
                Price is required.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPrice">
              <Form.Label>Images</Form.Label>
              {
                Array(MAXIMUM_IMAGES).fill(0).map((_, idx) =>
                  <React.Fragment key={idx}>
                    {this.state.currentImages[idx] ? <ArticleImage name={this.state.currentImages[idx]} /> : null}

                    <Form.Control type="file"
                      required={this.state.currentImages.length == 0}
                      onChange={(e) => this.inputImage(idx, e.target.files[0])} />

                    {this.state.currentImages.length == 0 ?
                      <Form.Control.Feedback type="invalid">
                        Please choose an image.
                     </Form.Control.Feedback> : null}
                  </React.Fragment>
                )
              }
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default ArticleForm;