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
          id: 8,
          name: 'Sarah B.',
          salary: 3000,
          isIncreased: false,
        },
        {
          id: 14,
          name: 'Max H.',
          salary: 1400,
          isIncreased: false,
        },
      ],
    }
  }

  deleteItem = id => {
    this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }))
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
        <EmploeesAddForm />
      </div>
    );
  }
}

export default App;
