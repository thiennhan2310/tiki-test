import React from 'react';
import ArticleItem from './ArticleItem';
import { fetchArticles } from '../../actions/article';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiDelete } from '../../helpers/api';
import ActionButton from '../../components/ActionButton'


class AdminList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  handleDelete(id) {
    return apiDelete(`/article/${id}`).then(() => {
      this.props.fetchArticles();
    })
  }
  render() {
    return (
      <React.Fragment>
        <Button variant="light"> <Link to={`/admin/article/add`}>Add + </Link></Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th colSpan='2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.articles.map(({ _id, title, price }) =>
              <tr>
                <td>{_id}</td>
                <td>{title}</td>
                <td>{price}</td>
                <td>
                  <Link to={`/admin/article/${_id}/edit`}>Edit</Link>
                </td>
                <td>
                  <ActionButton
                    type="danger"
                    onClick={() => this.handleDelete(_id)}
                    title="Delete"
                  />
                </td>
              </tr>
            )}
          </tbody>
        </Table >
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = { fetchArticles }

const mapStateToProps = (state) => ({
  articles: state.articles.articles
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);