import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const employees = data.map(item => {
    const { id, ...itemProps } = item;

    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={event => onToggleProp(id, event.currentTarget.getAttribute('data-toggle'))} />
    );
  });

  return (
    <div className="app-list">
      {employees.length
        ? (
          <ul className="list-group">
            {employees}
          </ul>
        )
        : (
          <p className="empty-list-message">Нет совпадений</p>
        )}
    </div>
  )
}

export default EmployeesList;
