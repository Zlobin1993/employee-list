import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isIncreased: false,
      isLiked: false,
    }
  }

  onIncrease = () => {
    this.setState(({ isIncreased }) => ({
      isIncreased: !isIncreased,
    }))
  }

  onLike = () => {
    this.setState(({ isLiked }) => ({
      isLiked: !isLiked,
    }))
  }

  render() {
    const { name, salary } = this.props;
    const { isIncreased, isLiked } = this.state;

    return (
      <li className={"list-group-item d-flex justify-content-between" + (isIncreased ? ' increase' : '') + (isLiked ? ' like' : '')}>
        <span className="list-group-item-label"
          onClick={this.onLike}>{name}</span>

        <input className="list-group-item-input"
          type="text"
          defaultValue={salary + '$'} />

        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-cookie btn-sm"
            type="button"
            onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button className="btn-trash btn-sm"
            type="button">
            <i className="fas fa-trash"></i>
          </button>

          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
