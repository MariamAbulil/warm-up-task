import './Person.css';

const Person = ({ name, isChecked }) => {
  return (
    <div className="person">
      <div className="person-info">
        <i className="fa-regular fa-user"></i>
        <h2>{name}</h2>
      </div>
      <div className="person-checkbox">
        <input type="radio" checked={isChecked} readOnly />
      </div>
    </div>
  );
};

export default Person;