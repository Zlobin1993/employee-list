import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmploeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: 'John A.',
          salary: 800,
          isIncreased: true,
        },
        {
          id: 2,
          name: 'Sarah B.',
          salary: 3000,
          isIncreased: false,
        },
        {
          id: 3,
          name: 'Max H.',
          salary: 1400,
          isIncreased: false,
        },
      ],
      nextId: 4,
    }
  }

  deleteItem = id => {
    this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }))
  }

  addItem = item => {
    this.setState(({ data, nextId }) => {
      const newItem = {
        ...item,
        id: nextId,
        isIncreased: false,
      }

      return {
        data: [...data, newItem],
        nextId: nextId + 1,
      }
    })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="app" >
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmploeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
