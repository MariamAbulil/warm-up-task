import FindMember from './FindMember';
import Person from './Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="div1">
        <div className="div2">
          <h2>Add members to Front-end development team</h2>
          <FindMember />
          <Person name="Carolien Bloeme" isChecked={false} />
          <Person name="Sun Jun" isChecked={true} />
          <Person name="Song Bao" isChecked={false} />
          <Person name="Olivia Arribas" isChecked={true} />
          <Person name={"Bonginkosi Mdladlana"} isChecked={false} />
          <Person name="Arina Belomestnykh" isChecked={true} />
          <Person name="Jacqueline Likoki" isChecked={true} />
        </div>
      </div>
    </div>
  );
}

export default App;