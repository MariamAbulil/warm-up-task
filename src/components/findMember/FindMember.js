import './FindMember.css';


const FindMember = () => {
  return (
    <div className="find-member">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input type="text" placeholder="Find members" className="search-input" />
    </div>
  );
};

export default FindMember;