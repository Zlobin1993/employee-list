import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: this.props.filters,
      activeFilterType: this.props.activeFilterType,
    };
  }

  onFilterUpdate = event => {
    const filterType = event.currentTarget.getAttribute('data-filter');

    this.setState({ activeFilterType: filterType });
    this.props.onFilterUpdate(filterType);
  }

  render() {
    const { filters, activeFilterType } = this.state;
    const buttonList = [];

    for (const key in filters) {
      const button = (
        <button className={'btn ' + (key === activeFilterType ? 'btn-light' : 'btn-outline-light')}
          type="button"
          data-filter={key}
          key={key}
          onClick={this.onFilterUpdate}
        >
          {filters[key]}
        </button>
      );

      buttonList.push(button);
    }

    return (
      <div className="btn-group">
        {buttonList}
      </div>
    );
  }
}

export default AppFilter;
