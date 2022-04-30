import './employees-list-item.css';

const EmployeesListItem = props => {
  const { name, salary, isIncreased, isRised, onDelete, onToggleProp } = props;

  return (
    <li className={"list-group-item d-flex justify-content-between" + (isIncreased ? ' increase' : '') + (isRised ? ' like' : '')}>
      <span className="list-group-item-label"
        data-toggle="isRised"
        onClick={onToggleProp}>{name}</span>

      <input className="list-group-item-input"
        type="text"
        defaultValue={salary + '$'} />

      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-cookie btn-sm"
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

        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}

export default EmployeesListItem;
