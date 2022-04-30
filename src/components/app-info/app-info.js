import './app-info.css';

const AppInfo = ({ employeesCount, employeesWithIncreasedSalary }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании ООО "Опасные ребята"</h1>
      <h2>Общее число сотрудников: {employeesCount}</h2>
      <h2>Премию получат: {employeesWithIncreasedSalary}</h2>
    </div>
  );
}

export default AppInfo;
