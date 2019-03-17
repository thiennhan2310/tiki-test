import React from 'react';
import Logo from '../components/Logo'
import Banner from '../widgets/Banner'
import ArticleList  from '../widgets/ArticleList/ArticleList'
import Footer  from '../widgets/Footer'
import {Container} from 'react-bootstrap';


class Home extends React.Component{
  render(){
    return (
      <Container>
        <Logo/>
        <Banner/>
        <ArticleList />
        <Footer/>
      </Container>
    )
  }
}
export default Home;