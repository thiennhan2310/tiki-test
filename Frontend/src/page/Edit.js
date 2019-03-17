import React from 'react';
import Logo from '../components/Logo'
import { Image, Container, Col, Row } from 'react-bootstrap';
import Title from '../components/Title'
import { apiGet, apiPut } from '../helpers/api';
import ArticleFrom from '../widgets/ArticleFrom';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.fetchArticleDetail = this.fetchArticleDetail.bind(this);
    this.state = {
      id: this.props.match.params.id,
      title: '',
      price: '',
      thumbnail: ''
    }
  }

  componentDidMount() {
    this.fetchArticleDetail(this.state.id)
  }

  fetchArticleDetail(id) {
    apiGet(`/article/${id}`).then(({ data }) => {
      this.setState({
        title: data.title,
        price: data.price,
        images: data.images,
      })
    })
  }

  onSubmit(id) {
    return (title, price, uploadImages) => {
      const data = new FormData()
      data.append('title', title)
      data.append('price', price)

      uploadImages
        .filter(image => !!image)
        .forEach((image) => {
          const { file, position } = image
          data.append(`image-${position}`, file, file.name)
        })
      apiPut(`/article/${id}`, data)
    }
  }

  render() {
    return (
      <Container>
        <ArticleFrom
          key={this.state.title}
          data={
            {
              id: this.state.id,
              title: this.state.title,
              price: this.state.price,
              images: this.state.images,
            }
          }
          onSubmit={this.onSubmit(this.state.id)}
        />
      </Container>
    )
  }
}
export default Edit;