import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      salary: '',
    }
  }

  onValueChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { name, salary } = this.state;
    const { onAdd } = this.props;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>

        <form className="add-form d-flex" onSubmit={event => event.preventDefault()}>
          <input className="form-control new-post-label"
            type="text"
            name="name"
            value={name}
            placeholder="Как его зовут?"
            onChange={this.onValueChange} />

          <input className="form-control new-post-label"
            type="number"
            name="salary"
            value={salary}
            placeholder="З/П в $?"
            onChange={this.onValueChange} />

          <button className="btn btn-outline-light"
            type="submit"
            onClick={() => onAdd(this.state)}>Добавить</button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
