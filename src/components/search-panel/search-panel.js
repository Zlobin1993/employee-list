import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  onUpdateSearch = event => {
    const searchTerm = event.target.value;

    this.setState({ searchTerm });
    this.props.onUpdateSearch(searchTerm);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.searchTerm}
        onChange={this.onUpdateSearch} />
    );
  }
}

export default SearchPanel;
