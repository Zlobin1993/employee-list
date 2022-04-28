import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmploeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const App = () => {
  const data = [
    {
      name: 'John A.',
      salary: 800,
      isIncreased: true,
    },
    {
      name: 'Sarah B.',
      salary: 3000,
      isIncreased: false,
    },
    {
      name: 'Max H.',
      salary: 1400,
      isIncreased: false,
    },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmploeesAddForm />
    </div>
  );
}

export default App;
