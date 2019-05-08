import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  updateRepository = async (id) => {
    const { repositories } = this.state;

    const { full_name } = repositories.find(r => r.id === id);

    try {
      const { data: repository } = await api.get(`repos/${full_name}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositories: repositories.map(repo => (repo.id === repository.id ? repository : repo)),
      });

      localStorage.setItem('@GitCompare:repositories', JSON.stringify(this.setState.repositories));
    } catch (error) {
      console.log(error.message);
    }
  };

  deleteRepository = (id) => {
    let { repositories } = this.state;

    repositories = repositories.filter(r => r.id !== id);

    localStorage.setItem('@GitCompare:repositories', JSON.stringify(repositories));

    this.setState({
      repositories: [...repositories],
    });
  };

  getLocalRepositories = async () => {
    if ((await localStorage.getItem('@GitCompare:repositories')) === 'undefined') {
      return [];
    }

    return JSON.parse(await localStorage.getItem('@GitCompare:repositories'));
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    try {
      const { repositoryInput } = this.state;

      const { data: repository } = await api.get(`repos/${repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      const localRepositories = await this.getLocalRepositories();

      localRepositories.push(repository);

      localStorage.setItem('@GitCompare:repositories', JSON.stringify(localRepositories));

      const { repositories } = this.state;

      this.setState({
        repositories: [...repositories, repository],
        repositoryInput: '',
        repositoryError: false,
      });
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      repositories, repositoryInput, loading, repositoryError,
    } = this.state;

    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>
        <CompareList
          repositories={repositories}
          deleteRepository={this.deleteRepository}
          updateRepository={this.updateRepository}
        />
      </Container>
    );
  }
}
