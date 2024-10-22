import FindMember from "./components/findMember/FindMember";
import Person from "./components/person/Person";
import "./App.css";

function App() {
  const persons = [
    { name: "Carolien Bloeme", isChecked: false,id:1 },
    { name: "Sun Jun", isChecked: true,id:2 },
    { name: "Song Bao", isChecked: false,id:3 },
    { name: "Olivia Arribas", isChecked: true,id:4 },
    { name: "BonginkosiMdladlana", isChecked: false,id:5 },
    { name: "Arina Belomestnykh", isChecked: true ,id:6},
    { name: "Jacqueline Likoki", isChecked: true,id:7 },
  ];
  return (
    <div className="main-contianer App">
      <h2>Add members to Front-end development team</h2>
      <FindMember />
      {
        persons.map((person)=>(<Person  key={person.id}name={person.name} isChecked={person.isChecked}/>))
      }{/* with*/}
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
