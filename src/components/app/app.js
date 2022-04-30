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
          isRised: false,
        },
        {
          id: 2,
          name: 'Sarah B.',
          salary: 3000,
          isIncreased: false,
          isRised: true,
        },
        {
          id: 3,
          name: 'Max H.',
          salary: 1400,
          isIncreased: false,
          isRised: false,
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
        isRised: false,
      };

      return {
        data: [...data, newItem],
        nextId: nextId + 1,
      }
    })
  }

  onToggleIncrease = id => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {
            ...item, isIncreased: !item.isIncreased,
          };
        }

        return item;
      }),
    }))
  }

  onToggleRise = id => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {
            ...item, isRised: !item.isRised,
          };
        }

        return item;
      }),
    }))
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

        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise} />

        <EmploeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
