import FindMember from "./components/findMember/FindMember";
import Person from "./components/person/Person";
import "./App.css";

function App() {
  const persons = [
    { name: "Carolien Bloeme", isChecked: false },
    { name: "Sun Jun", isChecked: true },
    { name: "Song Bao", isChecked: false },
    { name: "Olivia Arribas", isChecked: true },
    { name: "BonginkosiMdladlana", isChecked: false },
    { name: "Arina Belomestnykh", isChecked: true },
    { name: "Jacqueline Likoki", isChecked: true },
  ];
  return (
    <div className="main-contianer App">
      <h2>Add members to Front-end development team</h2>
      <FindMember />
      {
        persons.map((person)=>(<Person name={person.name} isChecked={person.isChecked}/>))
      }{/* with help*/}
      {/* 
      <Person name="Carolien Bloeme" isChecked={false} />
      <Person name="Sun Jun" isChecked={true} />
      <Person name="Song Bao" isChecked={false} />
      <Person name="Olivia Arribas" isChecked={true} />
      <Person name={"Bonginkosi Mdladlana"} isChecked={false} />
      <Person name="Arina Belomestnykh" isChecked={true} />
      <Person name="Jacqueline Likoki" isChecked={true} /> */}
    </div>
  );
}

export default App;
