import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";
import "./Home.css";
import axios from "axios";
import TextField from "@mui/material/TextField";

const Home = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredShows, setFilteredShows] = useState([]);
  const [hideDisplay, setHideDisplay] = useState(false);

  useEffect(() => {
    const url = "http://localhost:8080/api/shows";
    axios.get(url).then((response) => {
      setShows(response.data);
    });
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setHideDisplay(false)
    setQuery(value);
    if (value.length > 0) {
      const suggestions = shows.filter((show) =>
        show.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredShows(suggestions);
    } else {
      setFilteredShows([]);
    }
  };

  const handleSuggestionClick = (show) => {
    setQuery(show.title);
    setHideDisplay(true);
    setFilteredShows([show]);
  };

  return (
    <div className="home">
      <h1>Popular Shows</h1>
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setQuery(e.target.value);
          }}
          label="Search a Show"
          variant="outlined"
          placeholder="Search..."
          size="small"
          onChange={handleSearchChange}
        />
      </form>

      <section
        className={`suggestion-list-wrapper ${
          hideDisplay ? "hideDisplay" : ""
        }`}
      >
        {filteredShows?.length > 0 && (
          <section className="suggestions-list">
            {filteredShows?.map((show) => (
              <article
                key={show.id}
                className="selected-suggestion"
                onClick={() => handleSuggestionClick(show)}
              >
                {show.title}
              </article>
            ))}
          </section>
        )}
      </section>

      <div className="card-container">
        {/* query item nahi mila */}
        {filteredShows.length === 0 && query !== "" && (
          <div className="no-items-found">No items found</div>
        )}

        {filteredShows.length === 0 && query === ""
          ? shows.map((show) => <ShowCard key={show.id} show={show} />)
          : filteredShows.map((show) => <ShowCard key={show.id} show={show} />)}
      </div>
    </div>
  );
};

export default Home;
