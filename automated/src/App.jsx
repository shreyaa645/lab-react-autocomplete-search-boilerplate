import { useState } from "react";
import countryData from "./resources/countryData.json";
import "./App.css";

const App = () => {
  // State for search input
  const [search, setSearch] = useState("");
  // State to display the dropdown
  const [dropdown, setDropdown] = useState(true);

  // Event Handler for updating search input
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setDropdown(true);
  };

  // Event handler for escape button, i.e. ( OnClick of escape button, dropdown vanishes )
  const handleEscape = (e) => {
    if (e.code == "Escape") {
      setDropdown(false);
      console.log("Escape");
    }
  };

  // Country names based on search input
  const country = countryData.filter((country) =>
    country.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="container">
      {/* Input box and search button */}
      <h1>Search</h1>
      <div className="search-container">
        <input type="text" placeholder="Search" onChange={handleSearch} onKeyDown={handleEscape}/>
        <button type="submit">Search</button>
      </div>
      {/* Display dropdown if there is input and matching countries */}
      {search && dropdown && country.length !== 0 && (
        <div className="select-container">
          {/* Dropdown with country names  */}
          <select className="suggestion" size={country.length}>
            {country.map((country, i) => (
              <option key={i} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default App;