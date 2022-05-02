import './app-filter.css';

const AppFilter = ({ filters, activeFilterName, onFilterUpdate }) => {
  const buttonList = filters.map((filter, index) => (
    <button className={'btn ' + (filter.name === activeFilterName ? 'btn-light' : 'btn-outline-light')}
      type="button"
      data-filter={filter.name}
      key={index}
      onClick={onFilterUpdate}
    >
      {filter.label}
    </button>
  ));

  if (!buttonList.length) return;

  return (
    <div className="btn-group">
      {buttonList}
    </div>
  );
}

export default AppFilter;
