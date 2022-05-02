import { Component } from 'react';

import './employees-add-form.scss';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  initialState = {
    name: '',
    salary: '',
  };

  onValueChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onAdd(this.state);
    this.setState(this.initialState);

    document.querySelector('.add-form input').focus();
  }

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавление нового сотрудника</h3>

        <form className="add-form d-flex" onSubmit={this.onFormSubmit}>
          <input className="form-control new-post-label"
            type="text"
            name="name"
            value={name}
            placeholder="Имя сотрудника"
            required
            minLength="3"
            onChange={this.onValueChange} />

          <input className="form-control new-post-label"
            type="number"
            name="salary"
            value={salary}
            placeholder="Заработная плата"
            required
            onChange={this.onValueChange} />

          <button className="btn btn-outline-light"
            type="submit">Добавить</button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
