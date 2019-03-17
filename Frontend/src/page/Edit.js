import React from 'react';
import Logo from '../components/Logo'
import { Image, Container, Col, Row } from 'react-bootstrap';
import Title from '../components/Title'
import { apiGet } from '../helpers/api';
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.fetchArticleDetail = this.fetchArticleDetail.bind(this);
    this.state = {
      id: this.props.match.params.id,
      title: '',
      content: '',
      thumbnail: ''
    }
  }
  componentDidMount() {
    this.fetchArticleDetail(this.state.id)
  }

  fetchArticleDetail(id) {
    apiGet(`/article/${this.state.id}`).then(({ data }) => {
      this.setState({
        title: data.title,
        content: data.content,
        thumbnail: data.thumbnail,
      })
    })

  }
  render() {
    return (
      <Container>
        <Logo />
        <Row>
          <Col md="12"><Image src={this.state.thumbnail} fluid={true} /></Col>
          <Col md="12"><Title title={this.state.title} size="4" /></Col>
          <Col md="12">{this.state.content}</Col>
        </Row>
      </Container>
    )
  }
}
export default Edit;