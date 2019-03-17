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

  onSubmit(title, price) {
    console.log(title, price);
    apiPost(`/article`, {
      title,
      price
    })
  }

  render() {
    return (
      <Container>
        <Logo />
        <ArticleFrom
          onSubmit={this.onSubmit}
        />
      </Container>
    )
  }
}
export default Add;