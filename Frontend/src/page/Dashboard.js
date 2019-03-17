import React from 'react';
import { Container } from 'react-bootstrap';
import AdminList from '../widgets/ArticleList/AdminList';


class Home extends React.Component {
  render() {
    return (
      <Container>
        <AdminList />
      </Container>
    )
  }
}
export default Home;