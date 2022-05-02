import './employees-list-item.scss';

const EmployeesListItem = props => {
  const { name, salary, isIncreased, isRised, onDelete, onToggleProp } = props;

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">{name}</span>

      <input className="list-group-item-input"
        type="text"
        readOnly
        defaultValue={salary + '$'} />

      <div className="d-flex justify-content-center align-items-center">
        <button className={"btn-star btn-sm" + (isRised ? ' bg-success' : '')}
          type="button"
          data-toggle="isRised"
          onClick={onToggleProp}>
          <i className="fas fa-star"></i>
        </button>

        <button className={"btn-cookie btn-sm" + (isIncreased ? ' bg-success' : '')}
          type="button"
          data-toggle="isIncreased"
          onClick={onToggleProp}>
          <i className="fas fa-cookie"></i>
        </button>

        <button className="btn-trash btn-sm"
          type="button"
          onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default EmployeesListItem;
