import React from 'react';
import Logo from '../components/Logo'
import { Image, Container, Col, Row } from 'react-bootstrap';
import Title from '../components/Title'
import { apiGet, apiPost } from '../helpers/api';
import ArticleFrom from '../widgets/ArticleFrom';
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(title, price, images) {
    const data = new FormData()
    data.append('title', title)
    data.append('price', price)
    images.forEach(({ file, position }) => {
      data.append(`image-${position}`, file, file.name)
    })
    apiPost(`/article`, data)
  }

  render() {
    return (
      <Container>
        <ArticleFrom
          onSubmit={this.onSubmit}
        />
      </Container>
    )
  }
}
export default Add;