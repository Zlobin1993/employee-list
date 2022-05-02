import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmploeesAddForm from '../employees-add-form/employees-add-form';

import './app.scss';

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
      searchTerm: '',
      filters: [
        {
          name: 'default',
          label: 'Все сотрудники',
        },
        {
          name: 'rise',
          label: 'Повысить',
        },
        {
          name: 'increase',
          label: 'Увеличить заработную плату',
        },
      ],
      activeFilterName: 'default',
    }
  }

  deleteItem = id => {
    this.setState(({ data }) => ({ data: data.filter(item => item.id !== id) }))
  }

  addItem = item => {
    const newItem = {
      ...item,
      id: this.state.nextId,
      isIncreased: false,
      isRised: false,
    };

    this.setState(({ data, nextId }) => {
      return {
        data: [...data, newItem],
        nextId: nextId + 1,
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {
            ...item, [prop]: !item[prop],
          };
        }

        return item;
      }),
    }))
  }

  searchByTerm = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => (item.name.toLowerCase().indexOf(term.toLowerCase()) > -1));
  }

  onUpdateSearch = term => {
    this.setState({
      searchTerm: term,
    });
  }

  onFilterUpdate = event => {
    const filterName = event.currentTarget.getAttribute('data-filter');

    this.setState({ activeFilterName: filterName });
  }

  filterByName = (items, type) => {
    switch (type) {
      case 'increase':
        return items.filter(item => (item.isIncreased));
      case 'rise':
        return items.filter(item => (item.isRised));
      default:
        return items;
    }
  }

  render() {
    const { data, searchTerm, filters, activeFilterName } = this.state;
    const employeesCount = data.length,
      employeesWithIncreasedSalary = data.filter(item => item.isIncreased === true).length,
      filteredData = this.filterByName(this.searchByTerm(data, searchTerm), activeFilterName);

    return (
      <div className="app">
        <AppInfo
          employeesCount={employeesCount}
          employeesWithIncreasedSalary={employeesWithIncreasedSalary}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />

          <AppFilter
            filters={filters}
            activeFilterName={activeFilterName}
            onFilterUpdate={this.onFilterUpdate} />
        </div>

        <EmployeesList
          data={filteredData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />

        <EmploeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
